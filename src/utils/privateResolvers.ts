export const privateResolvers = (resolver) => (parent, args, context, info) => {
    console.log("context: ", context);
    try {
        if(context.req.user) {
        }
    } catch(error) {
        throw new Error(error);
    }
    return resolver(parent, args, context, info);
}