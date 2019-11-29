export const privateResolvers = (resolverFn) => async (parent, args, context, info): Promise<any> => {
    if(!context.req.user) {
        throw new Error("No JWT valid");
    }
    const received = await resolverFn(parent, args, context, info);
    return received;
}