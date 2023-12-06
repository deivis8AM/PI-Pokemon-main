// pokeapi hace lo siguiente:

// Realiza una solicitud HTTP GET a la API de PokeAPI para obtener información sobre los primeros 100 Pokémon.
// Extrae los nombres y URLs de los Pokémon de la respuesta.
// Utiliza axios.all para realizar múltiples solicitudes a las URLs de los Pokémon y obtener detalles específicos de cada uno.
// Crea un objeto con información relevante sobre cada Pokémon.
// Devuelve un array con la información completa de los Pokémon.
// Maneja cualquier error que pueda ocurrir durante el proceso y lo registra en la consola.
// Esta función es útil para obtener datos de Pokémon de la API de PokeAPI y se puede utilizar en otros programas o módulos.

// Importa la librería 'axios', que se utiliza para hacer solicitudes HTTP.
const axios = require("axios");

// Define una función asincrónica llamada 'pokeapi'.
const pokeapi = async () => {
  try {
    // Realiza una solicitud GET a la API de PokeAPI para obtener información sobre los primeros 100 Pokémon.
    const pokemones = await axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100");
    
    // Extrae los nombres y URLs de los Pokémon de la respuesta de la API.
    const pokeUrlName = pokemones.data.results;

    // Utiliza el método 'axios.all' para realizar múltiples solicitudes a las URLs de los Pokémon.
    const pokeComplete = await axios.all(
      pokeUrlName.map(async (pokeInd) => {
        // Realiza una solicitud GET a la URL de un Pokémon específico para obtener sus detalles.
        let infoPush = await axios.get(pokeInd.url);

        // Crea un objeto con información específica sobre el Pokémon a partir de los datos obtenidos.
        return {
          id: infoPush.data.id,
          name: infoPush.data.name,
          hp: infoPush.data.stats[0].base_stat,
          attack: infoPush.data.stats[1].base_stat,
          defense: infoPush.data.stats[2].base_stat,
          speed: infoPush.data.stats[5].base_stat, 
          height: infoPush.data.height,
          weight: infoPush.data.weight,
          image: infoPush.data.sprites.other.dream_world.front_default,
          types: infoPush.data.types.map((type) => type.type.name), 
        };
      })
    );

    // Devuelve un array con información completa sobre los Pokémon.
    return pokeComplete;
  } catch (error) {
    // Captura y maneja cualquier error que ocurra durante el proceso.
    console.log({ error: "Error al traer los pokemones desde los controllers" });
  }
}

// Exporta la función 'pokeapi' para que pueda ser utilizada en otros módulos.
module.exports = { pokeapi };
