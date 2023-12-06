// newPokemon realiza lo siguiente:

// Importa los modelos 'Pokemon' y 'Type' desde un archivo llamado "../db".
// Dentro de la función, crea un nuevo registro de Pokémon en la base de datos utilizando el modelo 'Pokemon' y los valores proporcionados en el objeto 'params'.
// Asocia el tipo (o tipos) del Pokémon utilizando el método 'addType', tomando el tipo (o tipos) de la propiedad 'types' del objeto 'params'.
// Exporta la función 'newPokemon' para que pueda ser utilizada en otros módulos.

// Importa los modelos 'Pokemon' y 'Type' desde el archivo "../db".
const { Pokemon, Type } = require("../db");

// Define una función asíncrona llamada 'newPokemon' que toma un objeto 'params' como argumento.
const newPokemon = async (params) => {
  // Dentro de la función 'newPokemon', crea un nuevo registro de Pokémon en la base de datos utilizando el modelo 'Pokemon'.
  // Los valores de los campos se toman del objeto 'params'.
  const createdPokemon = await Pokemon.create({
    name: params.name,
    hp: params.hp,
    attack: params.attack,
    defense: params.defense,
    speed: params.speed,
    height: params.height,
    weight: params.weight,
    img: params.img ? params.img : "https://w7.pngwing.com/pngs/531/918/png-transparent-pokemon-logo-pokemon-nintendo-logo-thumbnail.png",
  });

  // Luego, asocia el tipo (o tipos) del Pokémon utilizando el método 'addType'.
  // El tipo (o tipos) se toma de la propiedad 'types' del objeto 'params'.
  createdPokemon.addType(params.types);
};

// Exporta la función 'newPokemon' para que esté disponible para otros módulos que importen este archivo.
module.exports = { newPokemon };


// El uso de un objeto (en este caso, params) es una forma eficiente de pasar múltiples valores relacionados como argumento a una función en lugar de pasar cada valor individualmente. Esto hace que el código sea más legible y mantenible, especialmente cuando hay muchos campos o propiedades para configurar al crear un nuevo Pokémon. Por lo tanto, params es una forma organizada y común de gestionar estos datos en una función.