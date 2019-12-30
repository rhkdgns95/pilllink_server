import { Resolvers } from "../../../types/resolvers";
import { ForgotMyAccountQueryArgs, ForgotMyAccountResponse } from "../../../graph";
import User from "../../../entities/User/User";
const resolvers: Resolvers = {
    Query: {
        ForgotMyAccount: async(_, args: ForgotMyAccountQueryArgs): Promise<ForgotMyAccountResponse> => {
            const { email, firstName, lastName } = args;    
            try {
                const user: User | undefined = await User.findOne({
                    email,
                    firstName,
                    lastName
                });
                if(user) {
                    const { userId } = user;
                    return {
                        ok: true,
                        error: null,
                        userId
                    };
                } else {
                    return {
                        ok: false,
                        error: "Account not found",
                        userId: null
                    };
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    userId: null
                };
            }
        }
    }
};

export default resolvers;