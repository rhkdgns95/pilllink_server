export const privateResolvers = (resolver) => (parent, args, context, info) => {
    console.log("DATA: ", args);
    try {

    } catch(error) {
        throw new Error(error);
    }
    return resolver(parent, args, context, info);
}