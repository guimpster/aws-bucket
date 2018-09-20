import express from "express";
import fetch from "node-fetch";

import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "graphql-tools";
import { ApolloServer } from "apollo-server-express";

import AWS from "aws-sdk";
import uuid from "node-uuid";

import Azure from "./azure"

import {
  getSignedUrlPromise,
  parseStream,
  asyncMiddleware
} from "./utils";
import resolvers from "./resolvers";
import { getUser } from "./faker";
import typeDefs from "./schema.graphql";
import awsAccess from "./aws-access.json";
import azureAccess from "./azure-access.json";

const s3 = new AWS.S3(awsAccess);
const azure = new Azure(azureAccess);
const app = express();
const Server = new ApolloServer({
  schema: applyMiddleware(makeExecutableSchema({ typeDefs, resolvers })),
  context: ({ req }) => ({
    ...req,
    user: getUser(req)
  })
});

Server.applyMiddleware({ app });

app.get(
  "/image",
  asyncMiddleware(async (req, res, next) => {
    const params = { Key: "rg_23394849.jpg", Bucket: "photos-uploader" };

    const url = await getSignedUrlPromise(s3, "getObject", params);

    console.log(`Image's url is ${url}`);

    const response = await fetch(url);

    await parseStream(response, res);
  })
);

app.get(
  "/compareImages",
  asyncMiddleware(async (req, res, next) => {
    const face1_params = { Key: "bill_gates_1.jpeg", Bucket: "photos-uploader" };
    const face2_params = { Key: "bill_gatewa_2.jpg", Bucket: "photos-uploader" };

    const face1_url = await getSignedUrlPromise(s3, "getObject", face1_params);
    const face2_url = await getSignedUrlPromise(s3, "getObject", face2_params);

    console.log(`Face1's url is ${face1_url}`);
    console.log(`Face2's url is ${face2_url}`);

    const response = await azure.verifyFaces(face1_url, face2_url);

    console.log('Response: ', require('util').inspect(response, { depth: null }))

    res.json(response);
  })  
);

const options = { port: 4000 };

app.listen(options, () => {
  console.log(
    `🚀 Graphql ready at http://localhost:4000${Server.graphqlPath}
🚀 Server ready at http://localhost:4000/image
🚀 Server ready at http://localhost:4000/compareImages`
  );
});
