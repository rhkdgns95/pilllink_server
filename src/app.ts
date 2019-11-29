import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import schema from "./schema";
import { Response, NextFunction } from "express";
import User from "./entities/User/User";
import { decodeJWT } from "./utils/decodeJWT";

class App {
    public app: GraphQLServer;
    
    constructor() {
        this.app = new GraphQLServer({
            schema,
            context: req => {
                return {
                    req: req.request
                }
            }
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
        const token = req.get('X-JWT');
        if(token) {
            const user: User | undefined = await decodeJWT(token);
            if(user) {
                req.user = user;
            }
        }
        next();
    }
};

export default new App().app;