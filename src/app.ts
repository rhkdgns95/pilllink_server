import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import helmet from "helmet";
import cors from "cors";
import schema from "./schema";
import { Response, NextFunction } from "express";
import User from "./entities/User/User";
import { decodeJWT } from "./utils/decodeJWT";

// 계정설정 Mail전송 하루 최대일수 100건.
export const DAILY_MAIL_MAX = 100;

class App {
    public app: GraphQLServer;
    public dailyMailMax: number = DAILY_MAIL_MAX;
    public dailyMailCnt: number = 0;

    constructor() {
        this.app = new GraphQLServer({
            schema,
            context: req => {
                return {
                    req: req.request,
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
        this.app.express.use(this.nodeMailerCnt);
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

    private nodeMailerCnt = async (req, res: Response, next: NextFunction) => {
        req.dailyMailCnt = this.dailyMailCnt;
        req.handleDailyMailCnt = this.handleDailyMailCnt;
        next();
    }

    public handleDailyMailCnt = () => {
        if(this.dailyMailMax > this.dailyMailCnt) {
            this.dailyMailCnt++;
            // console.log("------ Start");
            // console.log("Date: ", new Date());
            // console.log("dailyMailCnt: ", this.dailyMailCnt);
            setTimeout(() => {
                this.dailyMailCnt--;
                // console.log("------ End")
                // console.log("Date: ", new Date());
                // console.log("End! 10분후 제거! 현재남은 갯수: ", this.dailyMailCnt);
            }, 1000 * 600);
        } 
    }
    
};

export default new App().app;