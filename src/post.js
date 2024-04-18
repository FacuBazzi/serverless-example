module.exports.handler = async (event) => {
  const input = JSON.parse(event.body)

  const isAdmin = event.requestContext.authorizer.lambda.user === "admin"

  const successResponse = {
    statusCode: 201,
    body: JSON.stringify(
      {
        message: `Pokemon '${input.name.english}' created.`,
        pokemon: input
      },
      null,
      2
    ),
  }

  const failureResponse = {
    statusCode: 403,
    body: JSON.stringify(
      {
        message: "You must have administrator privileges to create a Pokemon.",
      },
      null,
      2
    ),
  }

  return (isAdmin ? successResponse : failureResponse);
};
