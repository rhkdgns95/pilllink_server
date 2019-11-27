import { Resolvers } from "../../../types/resolvers";
import { EmailSignUpMutationArgs, EmailSignUpResponse } from "../../../graph";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async (_, args: EmailSignUpMutationArgs): Promise<EmailSignUpResponse> => {
            const { address, age, email, gender, name, password } = args;
            try {
                console.log("args: ", address, age, email, gender, name, password);
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                };
            }
            
            return {
                ok: true,
                error: null,
                token: null
            };
        }
    }
};

export default resolvers;