const fs = require("fs")

module.exports.handler = async (event) => {
  const id = event.pathParameters.id;
  const pokemonList = JSON.parse(fs.readFileSync("src/database.json"))

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
