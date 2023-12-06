//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js'); // Importa la instancia del servidor Express desde './src/app.js'.
const { conn } = require('./src/db.js'); // Importa la conexión a la base de datos desde './src/db.js'.
const { allTypes } = require('./src/Controllers/pokemonsType.js'); // Importa la función 'allTypes' desde './src/Controllers/pokemonsType.js'.

// Sincronización de todos los modelos a la base de datos.
conn.sync({ force: true }).then(() => {
  allTypes(); // Llama a la función 'allTypes' para asegurarse de que los tipos de Pokémon estén disponibles en la base de datos.

  // Inicia el servidor Express y lo hace escuchar en el puerto 3001.
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // Muestra un mensaje en la consola cuando el servidor está en funcionamiento.
  });
});

// En resumen, este código se encarga de configurar y sincronizar los modelos de la base de datos, asegurándose de que estén listos antes de iniciar el servidor Express en el puerto 3001. También llama a la función allTypes para cargar tipos de Pokémon en la base de datos si es necesario. Esto es una parte importante en la inicialización de una aplicación web.
