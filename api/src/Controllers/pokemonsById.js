// Importa los modelos 'Pokemon' y 'Type' desde un archivo "../db".
const { Pokemon, Type } = require("../db");

// Define una función asincrónica llamada 'dbInfoById' que toma un parámetro 'id'.
const dbInfoById = async (id) => {
  try {
    // Utiliza el modelo 'Pokemon' para buscar un Pokémon por su ID ('id').
    // También incluye la asociación con el modelo 'Type'.
    return await Pokemon.findByPk(id, {
      include: {
        model: Type,
      },
    });
  } catch (e) {
    // Captura y maneja cualquier error que pueda ocurrir durante la consulta.
    console.log(e, "Error en llamada a db por id");
  }
};

// Exporta la función 'dbInfoById' para que pueda ser utilizada en otros módulos.
module.exports = { dbInfoById };

// Esta función es útil para obtener información detallada de un Pokémon en la base de datos según su ID y se puede utilizar en otros módulos para acceder a la información específica de un Pokémon en la base de datos.