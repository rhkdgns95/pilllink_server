import { Resolvers } from "../../../types/resolvers";
import { EmailSignInResponse, EmailSignInQueryArgs } from "../../../graph";
import { createJWT } from "../../../utils/createJWT";
import User from "../../../entities/User/User";

const resolvers: Resolvers = {
    Query: {
        EmailSignIn: async (_, args: EmailSignInQueryArgs, context): Promise<EmailSignInResponse> => {
            const { email, password } = args;
            const user = await User.findOne({
                email
            });
            if(user) {
                const isVerify: boolean = await user.comparePassword(password);
                if(isVerify) {
                    const token: string = createJWT(user.id);
                    return {
                        ok: true,
                        error: null,
                        token
                    };
                } else {
                    return {
                        ok: false,
                        error: "Incorrect password entered",
                        token: null
                    };
                }
            } else {
                return {
                    ok: false,
                    error: "Incorrect email entered",
                    token: null
                };
            }
        }
    }
};

export default resolvers;