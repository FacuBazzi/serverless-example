const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.handler = async (event) => {
  const params = {
    Bucket: event.pathParameters.bucketName,
    Key: event.pathParameters.fileName,
    Body: event.body
  }

  const result = await s3.putObject(params).promise()

  const successResponse = {
      statusCode: 201,
      body: JSON.stringify(
      {
          message: "File created successfully",
          newData: JSON.stringify(result)
      },
      null,
      2
      ),
  }

  const failureResponse = {
      statusCode: 400,
      body: JSON.stringify(
      {
          message: "There was an error creating the file",
      },
      null,
      2
      ),
  }

  return (result ? successResponse : failureResponse)
};
