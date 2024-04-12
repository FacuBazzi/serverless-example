const pokemonList = require("src/database.json");

module.exports.handler = async (event) => {
  input = JSON.parse(event.body)
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: `There's no space for more Pokemon, sorry. The only thing i can do for '${input.name.english}' is writing it down here.`,
        pokemon: input
      },
      null,
      2
    ),
  };
};
