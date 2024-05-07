const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.handler = async (event) => {
  const bucket = { Bucket: event.pathParameters.bucketName }

  const result = await s3.createBucket(bucket).promise()

  const successResponse = {
      statusCode: 201,
      body: JSON.stringify(
      {
          message: "Bucket created successfully",
          bucket: JSON.stringify(result)
      },
      null,
      2
      ),
  }

  const failureResponse = {
      statusCode: 400,
      body: JSON.stringify(
      {
          message: "There was an error creating the bucket",
      },
      null,
      2
      ),
  }

  return (result ? successResponse : failureResponse)
};
