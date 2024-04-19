const fs = require("fs")

module.exports.handler = async (event) => {
  const queryParams = event.queryStringParameters ?? [] ;
  let pokemonList = JSON.parse(fs.readFileSync("src/database.json"))

  if (queryParams.name) 
    pokemonList = pokemonList.filter(x => x.name.english.toLowerCase().includes(queryParams.name.toLowerCase()));
  if (queryParams.type) 
    pokemonList = pokemonList.filter(x => x.type.map(t => t.toLowerCase()).includes(queryParams.type.toLowerCase()));

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: pokemonList,
      },
      null,
      2
    ),
  };
};
