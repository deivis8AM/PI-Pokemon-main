// Esta ruta es útil para obtener información sobre los tipos de Pokémon disponibles en la base de datos 

const { Router } = require("express"); // Importa el objeto Router de Express.
const { Type } = require("../db.js"); // Importa el modelo 'Type' desde el archivo "../db.js".
const { allTypes } = require("../Controllers/pokemonsType"); // Importa la función 'allTypes' desde el controlador 'pokemonsType'.
const router = Router(); // Crea una instancia del enrutador de Express.

router.get("/", async (req, res) => { // Configura una ruta GET en la raíz del punto de acceso.
    try {
        await allTypes(); // Llama a la función 'allTypes' para asegurarse de que los tipos de Pokémon estén disponibles en la base de datos.

        const types = await Type.findAll(); // Realiza una consulta a la base de datos para obtener todos los tipos de Pokémon y los almacena en la variable 'types'.

        res.status(200).json(types); // Responde con un estado 200 (OK) y devuelve los tipos de Pokémon en formato JSON.
    } catch (e) {
        res.status(400).send(e.toString()); // Captura y maneja errores y responde con un estado 400 "Solicitud incorrecta".
        console.log(e, "Error en el controller getTypes"); // Registra el error en la consola.
    }
});

module.exports = router; // Exporta el enrutador configurado para que pueda ser utilizado en otros archivos de la aplicación.
