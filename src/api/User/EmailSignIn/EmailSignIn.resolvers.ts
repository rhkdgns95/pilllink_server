import { Resolvers } from "../../../types/resolvers";
import { EmailSignInResponse } from "../../../graph";

const resolvers: Resolvers = {
    Query: {
        EmailSignIn: async (): Promise<EmailSignInResponse> => {
            return {
                ok: "hi",
                error: null,
                token: null
            }
        }
    }
};

export default resolvers;