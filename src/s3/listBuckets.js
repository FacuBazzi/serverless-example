const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.handler = async (event) => {
    const result = await s3.listBuckets().promise()
    
    const successResponse = {
        statusCode: 200,
        body: JSON.stringify(
        {
            message: "Bucket list obtained",
            buckets: result.Buckets
        },
        null,
        2
        ),
    }
  
    const failureResponse = {
        statusCode: 400,
        body: JSON.stringify(
        {
            message: "There was an error obtaining the buckets",
        },
        null,
        2
        ),
    }
  
    return (result ? successResponse : failureResponse)
};
