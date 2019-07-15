const Poke = require('./Poke')

 

pokeValue = new Poke ({

    
    name: "Misdreavus",
       nationalPokedexNumber: "200",
       imageUrl: "https://images.pokemontcg.io/dp6/107.png"
    });

   

    pokeValue

    .save()

    .then(result=> {

    console.log("Success" + result);

    }

    )

    .catch (error=> {

    console.log("Error" + error);

    }

    );