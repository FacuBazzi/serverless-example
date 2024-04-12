const pokemonList = require("src/database.json");

module.exports.handler = async (event) => {
  const input = JSON.parse(event.body);
  const pokemon = pokemonList.find(x => x.id == input.id);

  if (input.name) pokemon.name = input.name
  if (input.type) pokemon.type = input.type

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Pokemon #${pokemon.id} modified.`,
        pokemon: pokemon
      },
      null,
      2
    ),
  };
};
