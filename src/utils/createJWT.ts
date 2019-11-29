import jwt from "jsonwebtoken";

const secretKey: string = process.env.JWT_TOKEN || "";

export const createJWT = (id: number): string => {
    if(secretKey) {
        const token: string = jwt.sign({
            id
        }, secretKey);
        return token;
    } else {
        console.log("No JWT");
        return "";
    }
}