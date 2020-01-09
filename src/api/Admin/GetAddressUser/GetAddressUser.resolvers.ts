import { Resolvers } from "../../../types/resolvers";
import { adminResolvers } from "../../../utils/adminResolvers";
import User from "../../../entities/User/User";

const resolvers: Resolvers = {
    Query: {
        GetAddressUser: adminResolvers(async () => {
            try {
                const users: User[] = await User.find();

                return {
                    ok: true,
                    error: null,
                    users
                }
            } catch(error) {
                return {
                    ok: false,
                    error: null,
                    users: null
                };
            }
        })
    }
};

export default resolvers;