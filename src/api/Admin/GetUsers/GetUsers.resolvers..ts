import { Resolvers } from "../../../types/resolvers";
import { adminResolvers } from "../../../utils/adminResolvers";
import User from "../../../entities/User/User";
import { GetUsersResponse, GetUsersQueryArgs } from "../../../graph";

const resolvers: Resolvers = {
    Query: {
        GetUsers: adminResolvers(async(_, args: GetUsersQueryArgs, { req }): Promise<GetUsersResponse> => {
            const { skip, take } = args;
            try {
                const totalUsers: number = await User.count();
                const users: Array<User> = await User.find({
                    order:{
                        createdAt: "ASC"
                    },
                    skip,
                    take
                });

                return {
                    ok: true,
                    error: null,
                    users,
                    totalUsers
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    users: null,
                    totalUsers: null
                };
            }
        })
    }
};

export default resolvers;