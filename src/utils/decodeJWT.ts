import jwt from "jsonwebtoken";

export const decodeJWT = async (token: string): Promise<any> => {
    try {
        const decoded: any = await jwt.verify(token, process.env.JWT_TOKEN || "");
        const { id } = decoded;
        console.log("DecodeJWT: ", id);
    } catch(error) {
        console.log("Decode JWT error: ", error);
        return undefined;
    }
}