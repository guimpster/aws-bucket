import express from "express";
import fetch from "node-fetch";

import { applyMiddleware } from "graphql-middleware";
import { makeExecutableSchema } from "graphql-tools";
import { ApolloServer } from "apollo-server-express";

import AWS from "aws-sdk";
import uuid from "node-uuid";

import {
  getSignedUrlPromise,
  getObject,
  parseStream,
  asyncMiddleware
} from "./utils";
import resolvers from "./resolvers";
import { getUser } from "./faker";
import typeDefs from "./schema.graphql";
import awsAccess from "./aws-access.json";

const s3 = new AWS.S3(awsAccess);
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

const options = { port: 4000 };

app.listen(options, () => {
  console.log(
    `🚀 Graphql ready at http://localhost:4000${Server.graphqlPath}
🚀 Server ready at http://localhost:4000/image`
  );
});
