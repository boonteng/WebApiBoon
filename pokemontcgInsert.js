const Pokemon = require('./Pokemontcg')

 

pokemonValue = new Pokemon ({

    name:"Cubone",

    url:"https://pokeapi.co/api/v2/pokemon-species/104/"
    
    });

   

    pokemonValue

    .save()

    .then(result=> {

    console.log("Success" + result);

    }

    )

    .catch (error=> {

    console.log("Error" + error);

    }

    );