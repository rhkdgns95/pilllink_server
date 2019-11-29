import jwt from "jsonwebtoken";
import User from "../entities/User/User";

export const decodeJWT = async (token: string): Promise<undefined | User> => {
    try {
        const decoded: any = await jwt.verify(token, process.env.JWT_TOKEN || "");
        const { id } = decoded;
        const user: User | undefined = await User.findOne({
            id
        });
        return user;
    } catch(error) {
        console.log("Decode JWT error: ", error);
        return undefined;
    }
}