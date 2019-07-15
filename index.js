const axios = require('axios')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(path.join(__dirname, 'public')))
  app.set('views', path.join(__dirname, 'views'))
  app.set('view engine', 'ejs')
  app.get('/', (req, res) => {
    var pokes= require('./poke')
    pokes.find({}).then((response)=>{
      // console.log(response)
      res.render('pages/home',{
        pokemon: response
      })
    })
    
  })
//for insert data into database
  app.post('/insert',(req, res)=>{
    var abc = require('./poke');
    var input = req.body.pokename
    var api1 = "https://api.pokemontcg.io/v1/cards?name="+input; // APi 1 = name , national , img url
    axios.get(api1).then((response)=>{
      // console.log(response.data.cards[0]);
      if(response.data == null){
        console.log('error not found from api');
        res.redirect('/');
      }
      var api2 = "https://pokeapi.co/api/v2/pokemon/"+input; // APi 2 = url
      axios.get(api2).then((response2)=>{
        // console.log(response2.data.forms[0].url)
        var pokemon = new abc({
          name: response.data.cards[0].name,
          nationalPokedexNumber: response.data.cards[0].nationalPokedexNumber,
          imageUrl:response.data.cards[0].imageUrl ,
          url: response2.data.forms[0].url,
        })
        pokemon.save().then((result)=>{
          console.log(result);
          res.redirect('/');
        })
      })
      .catch((err2)=>{
        console.log(err2)
      })
    })
    .catch((err)=>{
      console.log(err)
    })
  })

//for delete data from database
  app.get('/delete/:id',(req,res)=>{
    var del = require('./poke');
    var id = req.params.id;
    del.deleteOne({"_id":id}).then((result)=>{
      console.log('delete success')
      res.redirect('/')
    })
  })
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`))

