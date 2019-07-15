
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

const pokemonSchema = new mongoose.Schema({
  name: { type: String },
  url: { type: String },
});

const Pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = Pokemon;