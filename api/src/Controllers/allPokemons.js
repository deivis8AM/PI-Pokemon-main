// allPokemon realiza lo siguiente:

// Importa dos funciones desde archivos externos ('pokeapi' y 'dataBasePokemons').
// Dentro del bloque try, espera a que ambas funciones asincrónicas se completen y almacena sus resultados en las variables 'pokemonApi' y 'pokemonDb'.
// Combina los resultados de ambas fuentes en 'dbApipoke' utilizando un operador ternario.
// Devuelve el resultado combinado 'dbApipoke'.
// Si se produce un error en el bloque try, captura el error y lo registra en la consola.

// Importa las funciones 'pokeapi' y 'dataBasePokemons' desde los archivos correspondientes.
const { pokeapi } = require("./pokemonsByapi");
const { dataBasePokemons } = require("./pokemonsByDB");

// Define una función asíncrona llamada 'allPokemon'.
const allPokemon = async () => {
  try {
    // Espera a que la función 'pokeapi' se complete y almacena su resultado en 'pokemonApi'.
    const pokemonApi = await pokeapi();
    // Imprime el resultado de 'pokemonApi' en la consola.
    console.log(pokemonApi);
    
    // Espera a que la función 'dataBasePokemons' se complete y almacena su resultado en 'pokemonDb'.
    const pokemonDb = await dataBasePokemons();

    // Combina los resultados de 'pokemonApi' y 'pokemonDb' en 'dbApipoke' utilizando el operador ternario.
    // Si 'pokemonDb' tiene un valor (es decir, no es nulo), se concatenan ambos arrays. De lo contrario, se usa 'pokeapi'.
    const dbApipoke = pokemonDb ? [...pokemonApi, ...pokemonDb] : pokemonApi;

    // Devuelve el resultado de 'dbApipoke'.
    return dbApipoke;
  } catch (error) {
    // Si ocurre un error en el bloque try, imprime un mensaje de error en la consola.
    console.log({ error: "Error in allPokemon" });
  }
}

// Exporta la función 'allPokemon' para que esté disponible para otros módulos que importen este archivo.
module.exports = { allPokemon };

