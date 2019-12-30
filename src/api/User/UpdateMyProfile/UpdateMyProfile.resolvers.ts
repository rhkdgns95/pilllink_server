import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
import { UpdateMyProfileResponse, UpdateMyProfileMutationArgs } from "../../../graph";
import User from "../../../entities/User/User";
import { cleanNullArgs } from "../../../utils/cleanNullArgs";
import { validate } from "class-validator";

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
                if(notNulls.email) {
                    const existEmailUser: User | undefined = await User.findOne({
                        email: notNulls.email
                    });
                    // 12-29 추가.
                    // 새로운 이메일이 존재하는지 확인할때는 
                    // 내 ID와 다른유저의 이메일과 비교하기 위해서,
                    if(existEmailUser && existEmailUser.id !== user.id) {
                        return {
                            ok: false,
                            error: "Already email exists.",
                            user: null
                        };
                    }
                    const tmpUser = new User();
                    tmpUser.email = notNulls.email;
                    const validate_email = await validate(tmpUser, {groups: [ "email"]});
                    if(validate_email.length > 0 && validate_email[0].constraints && validate_email[0].constraints.isEmail) {
                        const error: string = validate_email[0].constraints.isEmail;
                        return {
                            ok: false,
                            error,
                            user: null
                        };
                    }
                } 
                await User.update({
                    id: user.id
                }, { 
                    ...notNulls,
                    abroadAddress: args.isAbroad ? args.abroadAddress : null, 
                    addressList: args.isAbroad ? null : args.addressList,
                    addressItem: args.isAbroad ? null : args.addressItem
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