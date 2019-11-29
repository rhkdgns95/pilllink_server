import dotenv from "dotenv";
dotenv.config();
import { Options } from "graphql-yoga";
import { createConnection } from "typeorm";
import app from "./app";
import connectionOptions from "./ormConfig";

const END_POINT: string = "/graphql";
const PORT: number = 4000;
const PLAY_GROUND = "/playground";

const appOptions: Options = {
    endpoint: process.env.END_POINT || END_POINT,
    port: process.env.PORT || PORT,
    playground: process.env.PLAY_GROUND || PLAY_GROUND
};

const conn = () => console.log(`GraphqlServer is Running to ${PORT}`);

createConnection(connectionOptions).then(() => {
    app.start(appOptions, conn);
}).catch(err => {
    console.log("DB ERROR: ", err);
})

// Error: Cannot find module 'babel-runtime/core-js/promise'