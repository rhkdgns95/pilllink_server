import { Resolvers } from "../../../types/resolvers";
import { EmailSignUpMutationArgs, EmailSignUpResponse } from "../../../graph";
import User from "../../../entities/User/User";
import { createJWT } from "../../../utils/createJWT";
import { validate } from "class-validator";

const resolvers: Resolvers = {
    Mutation: {
        EmailSignUp: async (_, args: EmailSignUpMutationArgs): Promise<EmailSignUpResponse> => {
            const { email, userId } = args;
            try {
                const existIdUser = await User.findOne({
                    userId
                });
                if(!existIdUser) {
                    const existEmailUser = await User.findOne({
                        email
                    });
                    if(!existEmailUser) {
                        const user: User = await User.create({
                            ...args
                        });
                        /**
                         *  검즘 요소로는 다음과 같다.
                         *  Email (이메일 형식)
                         *  firstName, lastName (길이 제한)
                         */
                        const validate_email = await validate(user, {groups: [ "email" ]});
                        const validate_length = await validate(user, {groups: [ "length" ]});
                        if(validate_email.length === 0 && validate_length.length === 0) {
                            await user.save();
                            const token: string = createJWT(user.id);
                            return {
                                ok: true,
                                error: null,
                                token
                            };
                        } else {
                            let error: string = "폼형식 에러";
                            if(validate_email.length > 0) {
                                error = validate_email[0].constraints ? validate_email[0].constraints.isEmail : "";
                            } else if(validate_length.length > 0) {
                                error = validate_length[0].constraints ? validate_length[0].constraints.length : "";
                            }
                            return {
                                ok: false,
                                error: error,
                                token: null
                            }
                        }
                    } else {
                        return {
                            ok: false,
                            error: "This E-mail already exists",
                            token: null
                        };
                    }
                } else {
                    return {
                        ok: false,
                        error: "This ID already exists",
                        token: null
                    };
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    token: null
                };
            }
        }
    }
};

export default resolvers;