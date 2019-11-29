import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import schema from "./schema";
import { Response, NextFunction } from "express";

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
        this.app.express.use(this.jwt);
    }
    private jwt = async (req, res: Response, next: NextFunction) => {
        const id = req.get('x-jwt');
        if(id) {
        }
        next();
    }
};

export default new App().app;