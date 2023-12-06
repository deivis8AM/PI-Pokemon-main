// Importa el modelo 'Type' desde un archivo "../db.js".
const { Type } = require("../db.js");

// Importa la librería 'axios' para realizar solicitudes HTTP.
const axios = require("axios");

// Define una función asincrónica llamada 'allTypes'.
const allTypes = async () => {
  try {
    // Realiza una solicitud GET a la API de PokeAPI para obtener información sobre los tipos de Pokémon.
    const getTypes = await axios.get("https://pokeapi.co/api/v2/type");
    
    // Extrae los nombres de los tipos de Pokémon de la respuesta de la API y los almacena en 'pokeType'.
    const pokeType = getTypes.data.results.map((type) => {
      return {
        name: type.name,
      };
    });
    
    // Itera sobre los nombres de tipos obtenidos y utiliza 'Type.findOrCreate' para agregarlos a la base de datos.
    // Esto asegura que los tipos estén disponibles en la base de datos.
    pokeType.forEach((el) => {
      Type.findOrCreate({
        where: {
          name: el.name,
        },
      });
    });

    // Devuelve 'dtbase', que parece ser una referencia a la operación anterior (aunque en realidad no se almacena nada en 'dtbase').
    return dtbase;
  } catch (error) {
    // Captura y maneja cualquier error que pueda ocurrir durante el proceso y lo registra en la consola.
    console.log({ error: "No types available on Data Base" });
  }
};

// Exporta la función 'allTypes' para que pueda ser utilizada en otros módulos.
module.exports = { allTypes };

// Esta función es útil para asegurarse de que los tipos de Pokémon estén disponibles en la base de datos y se puedan utilizar en la aplicación.

// En resumen, findOrCreate se utiliza para garantizar que un registro con ciertas propiedades exista en la base de datos. Si no existe, lo crea; si ya existe, lo devuelve. Esto es útil para evitar duplicados en la base de datos y asegurarse de que los datos estén disponibles para su uso.