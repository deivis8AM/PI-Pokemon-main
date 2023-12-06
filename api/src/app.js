// En resumen, este código configura una aplicación Express que incluye middleware para analizar solicitudes HTTP, gestionar cookies, registrar solicitudes en la consola, permitir solicitudes desde un dominio específico (CORS), definir rutas y manejar errores. Es una configuración básica de una aplicación Express que proporciona una base sólida para desarrollar una API web.

const express = require('express'); // Importa la biblioteca Express.
const cookieParser = require('cookie-parser'); // Importa cookie-parser para el manejo de cookies.
const bodyParser = require('body-parser'); // Importa body-parser para analizar el cuerpo de las solicitudes.
const morgan = require('morgan'); // Importa morgan para el registro de solicitudes HTTP.
const routes = require('./routes/index.js'); // Importa las rutas de la aplicación desde el archivo "./routes/index.js".
require('./db.js'); // Importa la configuración de la base de datos desde el archivo "./db.js".

const server = express(); // Crea una instancia de la aplicación Express.

server.name = 'API'; // Establece el nombre de la aplicación.

// Configuración de middleware para analizar solicitudes HTTP.
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev')); // Utiliza morgan en modo de desarrollo para registrar las solicitudes en la consola.

// Configuración de encabezados CORS para permitir solicitudes desde el dominio 'http://localhost:3000'.
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Actualiza para que coincida con el dominio desde el que se realizarán las solicitudes.
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes); // Configura las rutas principales de la aplicación utilizando las rutas definidas en "./routes/index.js".

// Middleware de captura de errores.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server; // Exporta la aplicación Express configurada para que pueda ser utilizada en otros archivos de la aplicación.
