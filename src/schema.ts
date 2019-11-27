import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
import { IResolvers, makeExecutableSchema } from "graphql-tools";
import path from "path";
import { GraphQLSchema } from "graphql";

const allResolvers = fileLoader(
    path.join(__dirname, "./**/*.resolvers.*")
);
const allTypes = fileLoader(
    path.join(__dirname, "./**/*.graphql")
);

const mergedResolvers: IResolvers = mergeResolvers(allResolvers);
const mergedTypes: any = mergeTypes(allTypes);

const schema: GraphQLSchema = makeExecutableSchema({
    resolvers: mergedResolvers,
    typeDefs: mergedTypes
});

export default schema;