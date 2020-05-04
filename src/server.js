import {authenticateJwt} from "./passport";

require("dotenv").config;
import {GraphQLServer} from "graphql-yoga";
import logger from 'morgan';


import './env';
import schema from "./schema";
import './passport';
import {isAuthenticated} from "./middlewares";
import {prisma} from "../generated/prisma-client";
import {sendSecretMail} from "./utils";

const PORT = process.env.PORT;

const server = new GraphQLServer({schema, context: ({request}) => ({request})});

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start(
  {
    port: PORT,
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  () => console.log(`Server running on port http://localhost:${PORT}`)
);