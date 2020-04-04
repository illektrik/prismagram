require("dotenv").config;
import {GraphQLServer} from "graphql-yoga";
import logger from 'morgan';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(__dirname, ".env")});

import schema from "./schema";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({schema});

server.express.use(logger("dev"));

server.start({port: PORT}, () => console.log(`Server running on port http://localhost:${PORT}`));