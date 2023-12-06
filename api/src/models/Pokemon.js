// En resumen, este código define un modelo de datos llamado 'pokemon' que se utilizará para representar Pokémon en la base de datos. Cada Pokémon tendrá propiedades como 'name', 'image', 'hp', 'attack', 'defense', 'speed', 'height', 'weight', y 'createdInDb'. Estas propiedades tienen tipos de datos específicos y reglas de validación que garantizan la integridad de los datos en la base de datos. El modelo se exporta como una función que toma un objeto Sequelize 'sequelize' y define este modelo en la base de datos a través de Sequelize.

const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    // Define el modelo 'pokemon' con sus atributos y opciones.
    
    // ID del Pokémon, que es un UUID generado automáticamente.
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true, // Clave primaria
      allowNull: false, // No se permite que sea nulo
    },
    
    // Nombre del Pokémon, que es una cadena de caracteres (STRING) y debe ser único.
    name: {
      type: DataTypes.STRING,
      allowNull: false, // No se permite que sea nulo
      unique: true, // Debe ser único
    },
    
    // URL de la imagen del Pokémon, que es una cadena de caracteres (STRING).
    image: {
      type: DataTypes.STRING,
      defaultValue: "https://images3.alphacoders.com/677/677583.png", // Valor por defecto si no se proporciona
    },
    
    // Puntos de salud (HP) del Pokémon, que es un número entero (INTEGER) y no puede ser nulo.
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    // Poder de ataque del Pokémon, que es un número entero (INTEGER) y no puede ser nulo.
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    // Poder de defensa del Pokémon, que es un número entero (INTEGER) y no puede ser nulo.
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    // Velocidad del Pokémon, que es un número entero (INTEGER) y no puede ser nulo.
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    // Altura del Pokémon, que es un número entero (INTEGER) y no puede ser nulo.
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    // Peso del Pokémon, que es un número entero (INTEGER) y no puede ser nulo.
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    // Indica si el Pokémon fue creado en la base de datos (BOOLEAN), valor por defecto 'true'.
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
