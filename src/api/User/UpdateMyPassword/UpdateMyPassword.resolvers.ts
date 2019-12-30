import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
import { UpdateMyPasswordMutationArgs, UpdateMyPasswordResponse } from "../../../graph";
import User from "../../../entities/User/User";

const resolvers: Resolvers = {
    Mutation: {
        UpdateMyPassword: privateResolvers(async(_, args: UpdateMyPasswordMutationArgs, { req }): Promise<UpdateMyPasswordResponse> => {
            const user: User = req.user;
            const { currentPassword, newPassword } = args;
            try {
                const isVerified: boolean = user.comparePassword(currentPassword);
                if(isVerified) {
                    user.password = newPassword;
                    await user.save();
                    return {
                        ok: true,
                        error: null
                    };
                } else {
                    return {
                        ok: false,
                        error: "The password is incorrect"
                    };
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message
                };
            }
        })
    }
};

export default resolvers;