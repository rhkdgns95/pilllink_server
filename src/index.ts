import { Options } from "graphql-yoga";
import app from "./app";

const END_POINT: string = "/graphql";
const PORT: number = 4000;
const PLAY_GROUND = "/playground";

const appOptions: Options = {
    endpoint: process.env.END_POINT || END_POINT,
    port: process.env.PORT || PORT,
    playground: process.env.PLAY_GROUND || PLAY_GROUND
};

const conn = () => console.log(`GraphqlServer is Running to ${PORT}`);

app.start(appOptions, conn);
// Error: Cannot find module 'babel-runtime/core-js/promise'