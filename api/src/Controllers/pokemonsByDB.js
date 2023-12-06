// dataBasePokemons hace lo siguiente:

// Utiliza el modelo 'Pokemon' para buscar todos los Pokémon en la base de datos, incluyendo su asociación con el modelo 'Type'.
// Mapea los resultados obtenidos para crear un nuevo array con información específica de cada Pokémon.
// Devuelve un objeto con propiedades como id, nombre, imagen, estadísticas, tipos, y más para cada Pokémon.
// Maneja cualquier error que pueda ocurrir durante el proceso y lo registra en la consola.
// Esta función es útil para obtener datos de Pokémon almacenados en una base de datos y se puede utilizar en otros programas o módulos.

// Importa los modelos 'Pokemon' y 'Type' desde un archivo llamado "../db.js".
const { Pokemon, Type } = require("../db.js");

// Define una función asincrónica llamada 'dataBasePokemons'.
const dataBasePokemons = async () => {
  try {
    // Utiliza el modelo 'Pokemon' para buscar todos los Pokémon en la base de datos.
    // Además, incluye la asociación con el modelo 'Type'.
    const pokesOnDB = await Pokemon.findAll({
      include: Type,
    });
    
    // Mapea los resultados obtenidos en 'pokesOnDB' para obtener un nuevo array con información específica de cada Pokémon.
    // Devuelve un objeto con propiedades como id, nombre, imagen, estadísticas, tipos y más.
    return pokesOnDB.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.image,
        hp: pokemon.hp,
        attack: pokemon.attack,
        defense: pokemon.defense,
        speed: pokemon.speed,
        height: pokemon.height,
        weight: pokemon.weight,
        types: pokemon.types.map((type) => type.name),
        createdInDb: pokemon.createdInDb,
      };
    });
  } catch (error) {
    // Captura y maneja cualquier error que pueda ocurrir durante el proceso.
    console.log({ error: "No hay Pokémon disponibles en la base de datos" });
  }
};

// Exporta la función 'dataBasePokemons' para que pueda ser utilizada en otros módulos.
module.exports = { dataBasePokemons };


// En resumen, el mapeo se utiliza para reorganizar y transformar los datos de la base de datos en un formato que sea más conveniente para su uso en la aplicación, en este caso, en el formato de objetos con propiedades específicas que representan a cada Pokémon.