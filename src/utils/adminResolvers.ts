import { Resolver } from "../types/resolvers";

export const adminResolvers = (resolverFn: Resolver) => async (parent: any, args: any, context: any, info: any): Promise<any> => {
    if(!context.req.user || context.req.user.userId !== process.env.ADMIN_ID) {
        console.log("ADMIN: ", process.env.ADMIN_ID);
        console.log("context.req.user: ", context.req.user);
        throw new Error("No Admin valid")
    }
    const received = await resolverFn(parent, args, context, info);
    return received;
};