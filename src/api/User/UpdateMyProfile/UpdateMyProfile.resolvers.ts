import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
import { UpdateMyProfileResponse, UpdateMyProfileMutationArgs } from "../../../graph";
import User from "../../../entities/User/User";
import { cleanNullArgs } from "../../../utils/cleanNullArgs";

const resolvers: Resolvers = {
    Mutation: {
        UpdateMyProfile: privateResolvers(async (_, args: UpdateMyProfileMutationArgs, { req }): Promise<UpdateMyProfileResponse> => {
            const user: User = req.user;
            try {
                const notNulls: any = cleanNullArgs(args);
                if(notNulls.password) {
                    user.password = notNulls.password;
                    await user.save();
                    delete notNulls.password;
                }
                await User.update({
                    id: user.id
                }, { 
                    ...notNulls
                });
                /**
                 *  password만 따로 관리하는 이유는?
                 * 
                 *  BeforeAfter, BeforeInsert를 동작시켜
                 *  수정된 패스워드에 Bcrypt암호화를 시키기 위해서는
                 *  객체로 직접 값을 넣어준다음 .save()으로 동작하는것이다.
                 *  만약 이 과정을 생략한다면, 패스워드에 암호화된값이아니라,
                 *  그냥 입력한 문자열이 들어가게된다.
                 */
                return {
                    ok: true,
                    error: null,
                    user
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    user: null
                }
            }
        })
    }
};

export default resolvers;