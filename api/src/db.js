// En resumen, este código configura una conexión a una base de datos PostgreSQL utilizando Sequelize, define modelos, establece relaciones y exporta todo para que pueda ser utilizado en otros archivos de la aplicación. También se asegura de que los nombres de los modelos sigan una convención de capitalización.

require('dotenv').config(); // Importa y configura dotenv para cargar variables de entorno desde un archivo .env.
const { Sequelize } = require('sequelize'); // Importa la biblioteca Sequelize para la gestión de la base de datos.
const fs = require('fs'); // Importa el módulo fs (File System) para trabajar con el sistema de archivos.
const path = require('path'); // Importa el módulo path para trabajar con rutas de archivos.

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env; // Obtiene las credenciales de la base de datos desde las variables de entorno.

// Crea una instancia de Sequelize y configura la conexión a la base de datos PostgreSQL.
const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/pokemon`,
   {
      logging: false, // Desactiva el registro de consultas SQL en la consola.
      native: false, // Indica que no se utilizará la extensión nativa de PostgreSQL para Sequelize.
   }
);

const basename = path.basename(__filename); // Obtiene el nombre del archivo actual.

const modelDefiners = []; // Define un arreglo para almacenar las definiciones de modelos.

// Lee todos los archivos de la carpeta 'models', los requiere y los agrega al arreglo 'modelDefiners'.
fs.readdirSync(path.join(__dirname, '/models'))
   .filter(
      (file) =>
         file.indexOf('.') !== 0 &&
         file !== basename &&
         file.slice(-3) === '.js'
   )
   .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, '/models', file)));
   });

// Inyecta la conexión (sequelize) a todos los modelos.
modelDefiners.forEach((model) => model(sequelize));

// Capitaliza los nombres de los modelos, por ejemplo, 'pokemon' se convierte en 'Pokemon'.
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
   entry[0][0].toUpperCase() + entry[0].slice(1),
   entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades.
// Define las relaciones entre los modelos (en este caso, entre Pokemon y Type).
const { Pokemon, Type } = sequelize.models;
Pokemon.belongsToMany(Type, { through: 'pokemonTypes' });
Type.belongsToMany(Pokemon, { through: 'pokemonTypes' });

// Exporta todos los modelos y la conexión para su uso en otros archivos.
module.exports = {
   ...sequelize.models, // Para importar los modelos individualmente, por ejemplo, const { Pokemon, Type } = require('./db.js');
   conn: sequelize, // Para importar la conexión, por ejemplo, const { conn } = require('./db.js');
};

