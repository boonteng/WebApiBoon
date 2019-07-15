//https://server2-boon.herokuapp.com/
const mongoose = require('mongoose');
const db = 'mongodb+srv://Boon:abcd@cluster0-zb3dy.mongodb.net/pokemon?retryWrites=true&w=majority';

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log('Connected to database');
  })
  .catch(error => {
    console.log('Mongoose connetion error: ', error);
  });

const pokeSchema = new mongoose.Schema({
  name: { type: String },
  nationalPokedexNumber: { type: String },
  imageUrl: { type: String },
  url: {type:String},
});

const Poke = mongoose.model('poke', pokeSchema);

module.exports = Poke;