const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.handler = async (event) => {
  const params = {
    Bucket: event.pathParameters.bucketName,
  }

  const result = await s3.listObjectsV2(params).promise()

  const successResponse = {
      statusCode: 200,
      body: JSON.stringify(
      {
          message: "Files obtained successfully",
          files: result.Contents
      },
      null,
      2
      ),
  }

  const failureResponse = {
      statusCode: 400,
      body: JSON.stringify(
      {
          message: "There was an error reading the bucket",
      },
      null,
      2
      ),
  }

  return (result ? successResponse : failureResponse)
};
