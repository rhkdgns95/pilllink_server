import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
import { GetMyProfileResponse } from "../../../graph";
import User from "../../../entities/User/User";

const resolvers: Resolvers = {
    Query: {
        GetMyProfile: privateResolvers(async (_, __, { req }): Promise<GetMyProfileResponse> => {
            const user: User = req.user;
            return {
                ok: true,
                error: null,
                user
            };
        })
    }
};

export default resolvers;