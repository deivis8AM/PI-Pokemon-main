const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRoutes = require("./pokemonsRoutes")
const typesRouters = require("./typesRoutes") 
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons" , pokemonsRoutes)
router.use("/types" , typesRouters )

module.exports = router;

// En resumen, este archivo se encarga de importar las rutas definidas en otros módulos (pokemonsRoutes y typesRoutes) y configurarlas en rutas principales (por ejemplo, "/pokemons" y "/types") para que las peticiones HTTP relacionadas con Pokémon y tipos de Pokémon sean manejadas por las rutas específicas definidas en esos módulos.