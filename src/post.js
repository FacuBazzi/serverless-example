const pokemonList = require("src/database.json");

module.exports.handler = async (event) => {
  const input = JSON.parse(event.body)
  return {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: `Pokemon '${input.name.english}' created.`,
        pokemon: input
      },
      null,
      2
    ),
  };
};
