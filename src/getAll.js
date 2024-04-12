const pokemonList = require("src/database.json");

module.exports.handler = async (event) => {
  const queryParams = event.queryStringParameters ?? [] ;
  let result = pokemonList;

  if (queryParams.name) 
    result = result.filter(x => x.name.english.toLowerCase().includes(queryParams.name.toLowerCase()));
  if (queryParams.type) 
    result = result.filter(x => x.type.map(t => t.toLowerCase()).includes(queryParams.type.toLowerCase()));

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        data: result,
      },
      null,
      2
    ),
  };
};
