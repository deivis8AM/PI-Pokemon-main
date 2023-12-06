// En resumen, este código define un modelo de datos llamado 'type' que se utilizará para representar los tipos de Pokémon en la base de datos. El modelo tiene una sola propiedad llamada 'name', que es una cadena de caracteres (STRING) y debe ser única en la base de datos. Esto asegura que no pueda haber tipos de Pokémon duplicados con el mismo nombre en la base de datos. Este modelo también se exporta como una función que toma un objeto Sequelize 'sequelize' y define este modelo en la base de datos a través de Sequelize.

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define("type", {
    // Define el modelo 'type' con sus atributos y opciones.

    // Nombre del tipo de Pokémon, que es una cadena de caracteres (STRING) y debe ser único.
    name: {
      type: DataTypes.STRING,
      unique: true, // Debe ser único en la base de datos
    },
  });
};
