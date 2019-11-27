import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import schema from "./schema";

class App {
    public app: GraphQLServer;
    
    constructor() {
        this.app = new GraphQLServer({
            schema
        });
        this.middlewares();
    };
    private middlewares = () => {
        this.app.express.use(logger('dev'));
        this.app.express.use(helmet());
        this.app.express.use(cors());
    }
};

export default new App().app;