import { ConnectionOptions } from "typeorm";
// import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
const connectionOptions: ConnectionOptions = {
    logging: true,
    synchronize: true,
    host: process.env.DB_HOST || "",
    database: process.env.DB_NAME || "",
    type: "postgres",
    port: 5432,
    username: process.env.DB_USERNAME || "",
    password: process.env.DB_PASSWORD || "",
    entities: ["/entities/**/*.*"],
};

export default connectionOptions;