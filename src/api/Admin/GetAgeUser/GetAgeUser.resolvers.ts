import { Resolvers } from "../../../types/resolvers";
import { adminResolvers } from "../../../utils/adminResolvers";
import { GetAgeUserResponse, UserAgeResponse } from "../../../graph";
import User from "../../../entities/User/User";

const resolvers: Resolvers = {
    Query: {
        GetAgeUser: adminResolvers(async(): Promise<GetAgeUserResponse> => {
            try {
                const users: User[] = await User.find({

                });
                let userAge: UserAgeResponse[] = [];
                for(var i = 0; i <= 10; i++) {
                    if(i > 0) {
                        userAge[i] = {
                            title: i * 10 + "대",
                            count: 0
                        }
                    } else {
                        userAge[i] = {
                            title: "0 ~ 9세",
                            count: 0
                        }
                    }
                    
                };
                users.map(user => {
                    const age = Math.floor(user.age / 10);
                    userAge[age] = {
                        ...userAge[age],
                        count: userAge[age].count + 1
                    }; 
                });
                return {
                    ok: true,
                    error: null,
                    userAge
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    userAge: null
                };
            }
        })
    }
};

export default resolvers;