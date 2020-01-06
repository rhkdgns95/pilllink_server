import { Resolvers } from "../../../types/resolvers";
import { adminResolvers } from "../../../utils/adminResolvers";
import { GetNationalityUserResponse } from "../../../graph";
import User from "../../../entities/User/User";

const resolvers: Resolvers = {
    Query: {
        GetNationalityUser: adminResolvers(async (): Promise<GetNationalityUserResponse> => {
            try {
                const users: User[] = await User.find({});
                return {
                    ok: true,
                    error: null,
                    countries: [
                        {
                            name: "한국",
                            count: users.filter(u => u.nationality === "KO").length
                        },
                        {
                            name: "미국",
                            count: users.filter(u => u.nationality === "EN").length
                        },
                        {
                            name: "중국",
                            count: users.filter(u => u.nationality === "CH").length
                        },
                        {
                            name: "일본",
                            count: users.filter(u => u.nationality === "JA").length
                        },
                        {
                            name: "프랑스",
                            count: users.filter(u => u.nationality === "FR").length
                        },
                        {
                            name: "스페인",
                            count: users.filter(u => u.nationality === "ES").length
                        },
                        {
                            name: "러시아",
                            count: users.filter(u => u.nationality === "RU").length
                        },
                        {
                            name: "몽골",
                            count: users.filter(u => u.nationality === "MO").length
                        },
                        {
                            name: "베트남",
                            count: users.filter(u => u.nationality === "VI").length
                        },
                        {
                            name: "태국",
                            count: users.filter(u => u.nationality === "TH").length
                        },
                        {
                            name: "미국",
                            count: users.filter(u => u.nationality === "US").length
                        },
                        {
                            name: "캐나다",
                            count: users.filter(u => u.nationality === "CA").length
                        },
                        {
                            name: "멕시코",
                            count: users.filter(u => u.nationality === "ME").length
                        },
                        {
                            name: "대만",
                            count: users.filter(u => u.nationality === "TA").length
                        },
                        {
                            name: "홍콩",
                            count: users.filter(u => u.nationality === "HO").length
                        }
                    ]
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    countries: null
                };
            }
        })
    }
};

export default resolvers;