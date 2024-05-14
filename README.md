<!--
title: 'AWS Simple HTTP Endpoint example in NodeJS'
description: 'This template demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# AWS Lambda Challenge - Facundo.Bazzi

A- Create a serverless project and expose an endpoint with mock (static data or this can be placed in a json file).

B- Create different lambdas to know how to extract path params and query params in GET request.

C- Create different lambdas to know how to extract data from the request body in POST, PUT, PATCH AND DELETE.

D- Create a private lambda that handles the authentication and authorization process.

E- Create a public lambda that uses an AWS S3 service in develop mode.
  * Create a lambda that creates a bucket with a static name and writes some values in an object.
  * Create a lambda that receives a path param to show an object list saved in a bucket.
  * Create a lambda that receives some path params to show all values associated to an object.
  * Create a log service that uses AWS S3 service in develop mode to register some values (e. g., host, path, httpMethod, sourceIp, userAgent and request date) in every lambda created previously.
  * Create a CRUD where you can store data locally. Apply all the HTTP methods and use One to One, One to Many and Many to Many use cases. Use DynamoDB as a database engine.

F- Configure an AWS SQS service in develop mode and send some values from existing lambdas to enqueue some messages.

G- Intercept all existing lambdas to audit all requests using the log service to save values in an AWS S3 service in develop mode.

H- Configure a SQS Dead Letter Queue and throw any errors, so it can be read as a message from SQS DLQ.

## Serverless Framework Node HTTP API on AWS

I used this template that demonstrates how to make a simple HTTP API with Node.js running on AWS Lambda and API Gateway using the Serverless Framework.

This template does not include any kind of persistence (database). For more advanced examples, check out the [serverless/examples repository](https://github.com/serverless/examples/) which includes Typescript, Mongo, DynamoDB and other examples.

### Deployment

```
$ serverless deploy
```

After deploying, you should see output similar to:

```bash
Deploying aws-node-http-api-project to stage dev (us-east-1)

✔ Service deployed to stack aws-node-http-api-project-dev (152s)

endpoint: GET - https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/
functions:
  hello: aws-node-http-api-project-dev-hello (1.9 kB)
```

_Note_: In current form, after deployment, your API is public and can be invoked by anyone. For production deployments, you might want to configure an authorizer. For details on how to do that, refer to [http event docs](https://www.serverless.com/framework/docs/providers/aws/events/apigateway/).

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
curl https://xxxxxxx.execute-api.us-east-1.amazonaws.com/
```

Which should result in response similar to the following (removed `input` content for brevity):

```json
{
  "message": "Go Serverless v2.0! Your function executed successfully!",
  "input": {
    ...
  }
}
```

### Local development

You can invoke your function locally by using the following command:

```bash
serverless invoke local --function hello
```

Which should result in response similar to the following:

```
{
  "statusCode": 200,
  "body": "{\n  \"message\": \"Go Serverless v3.0! Your function executed successfully!\",\n  \"input\": \"\"\n}"
}
```


Alternatively, it is also possible to emulate API Gateway and Lambda locally by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.

After installation, you can start local emulation with:

```
serverless offline
```

To learn more about the capabilities of `serverless-offline`, please refer to its [GitHub repository](https://github.com/dherault/serverless-offline).
