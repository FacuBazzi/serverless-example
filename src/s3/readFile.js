const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.handler = async (event) => {
  const { bucketName, fileName } = event.pathParameters

  const params = {
    Bucket: bucketName,
    Key: fileName
  }

  const result = await s3.getObject(params).promise()

  const successResponse = {
      statusCode: 200,
      body: JSON.stringify(
      {
          message: "File obtained successfully",
          content: JSON.parse(result.Body.toString())
      },
      null,
      2
      ),
  }

  const failureResponse = {
      statusCode: 400,
      body: JSON.stringify(
      {
          message: "There was an error reading the file",
      },
      null,
      2
      ),
  }

  return (result ? successResponse : failureResponse)
};
