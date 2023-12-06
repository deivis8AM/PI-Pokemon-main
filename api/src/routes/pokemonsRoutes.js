// En resumen, este código configura rutas para obtener y crear Pokémon en una aplicación Express, y se comunica con los controladores correspondientes para realizar las operaciones adecuadas en la base de datos y responder a las solicitudes HTTP.

const { Router } = require("express"); // Importa el objeto Router de Express.
const { allPokemon } = require("../Controllers/allPokemons"); // Importa la función 'allPokemon' desde el controlador.
const { newPokemon } = require("../Controllers/createPokemon"); // Importa la función 'newPokemon' desde el controlador.
const router = Router(); // Crea una instancia del enrutador de Express.

router.get("/", async (req, res) => { // Configura una ruta GET en la raíz del punto de acceso.
   try {
      const { name } = req.query; // Extrae el parámetro 'name' de la consulta de la URL.
      const pokemonsList = await allPokemon(); // Obtiene la lista de todos los Pokémon desde el controlador.

      if (name) { // Si se proporciona un nombre en la consulta de la URL.
         const pokeSelect = await pokemonsList.filter((poke) => poke.name === name.toLowerCase()); // Filtra la lista de Pokémon por nombre.
         if (pokeSelect.length > 0) { // Si se encuentra al menos un Pokémon con el nombre especificado.
            res.status(200).json(pokeSelect); // Responde con los Pokémon encontrados en formato JSON.
         } else {
            res.status(404).send("Not found"); // Si no se encuentra ningún Pokémon, responde con un estado 404 "No encontrado".
         }
      } else {
         res.json(pokemonsList); // Si no se proporciona un nombre, responde con la lista completa de Pokémon en formato JSON.
      }
   } catch (error) {
      res.status(400).json({ error: "Error al traer los pokemones" }); // Captura y maneja errores y responde con un estado 400 "Solicitud incorrecta".
   }
});

router.get("/:id", async (req, res) => { // Configura una ruta GET para obtener un Pokémon por su ID.
   try {
      const { id } = req.params; // Extrae el parámetro 'id' de la URL.
      const pokeList = await allPokemon(); // Obtiene la lista de todos los Pokémon desde el controlador.

      if (id) { // Si se proporciona un ID en la URL.
         const selectedPoke = await pokeList.filter((obj) => obj.id == id); // Filtra la lista de Pokémon por ID.
         if (selectedPoke.length > 0) { // Si se encuentra al menos un Pokémon con el ID especificado.
            res.status(200).json(selectedPoke); // Responde con los Pokémon encontrados en formato JSON.
         } else {
            res.status(400).send("The id entered does not correspond to an existing pokemon"); // Si no se encuentra un Pokémon con el ID, responde con un estado 400 "Solicitud incorrecta".
         }
      }
   } catch (error) {
      res.status(400).json({ error: error.message }); // Captura y maneja errores y responde con un estado 400 "Solicitud incorrecta".
   }
});

router.post("/", async (req, res) => { // Configura una ruta POST para crear un nuevo Pokémon.
   try {
      await newPokemon(req.body); // Llama a la función 'newPokemon' del controlador para crear un nuevo Pokémon con los datos del cuerpo de la solicitud.
      res.json("Your pokemon has be created successfully"); // Responde con un mensaje de éxito en formato JSON.
   } catch (e) {
      res.status(400).send(e.toString()); // Captura y maneja errores y responde con un estado 400 "Solicitud incorrecta".
      console.log(e, "Error on Controller"); // Registra el error en la consola.
   }
});

module.exports = router; // Exporta el enrutador configurado para que pueda ser utilizado en otros archivos de la aplicación.
