import { Resolvers } from "../../../types/resolvers";
import { ResetPasswordMutationArgs, ResetPasswordResponse } from "../../../graph";
import { DAILY_MAIL_MAX } from "../../../app";
import User from "../../../entities/User/User";
import { createRandomPwd } from "../../../utils/createRandomPwd";
import { sendEmail } from "../../../utils/sendEmail";

const resolvers: Resolvers = {
    Mutation: {
        ResetPassword: async (_, args: ResetPasswordMutationArgs, { req }): Promise<ResetPasswordResponse> => {
            const { dailyMailCnt, handleDailyMailCnt } = req;
            const { userId, email } = args;
            if(DAILY_MAIL_MAX > dailyMailCnt) {
                try {
                    const user: User | undefined = await User.findOne({
                        userId,
                        email
                    });

                    if(user) {
                        const { fullName, email } = user;
                        const newPassword = createRandomPwd();
                        
                        const isVerifiedSendEmail = await sendEmail(fullName,email, newPassword, handleDailyMailCnt);
                        const { ok, error = "Failed." } = isVerifiedSendEmail;

                        // console.log("newPassword: ", newPassword);
                        if(isVerifiedSendEmail.ok) {
                            user.password = newPassword;
                            await user.save(); 
                            return {
                                ok,
                                error: null
                            }
                        } else {
                            return {
                                ok,
                                error
                            };
                        }
                    } else {
                        return {
                            ok: false,
                            error: "Couldn't find the 'E-mail' or 'ID' for that account."
                        };
                    }
                } catch(error) {
                    return {
                        ok: false,
                        error: error.message
                    };
                }    
            } else {
                return {
                    ok: false,
                    error: "Exceeded too many daily mail requests on the server."
                }
            }
        }
    }
};

export default resolvers;