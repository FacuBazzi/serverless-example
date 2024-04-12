const pokemonList = require("src/database.json");

module.exports.handler = async (event) => {
  const id = event.pathParameters.id;

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: pokemonList.find(x => x.id == id),
      },
      null,
      2
    ),
  };
};
