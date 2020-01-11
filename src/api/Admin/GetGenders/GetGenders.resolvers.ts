import { Resolvers } from "../../../types/resolvers";
import { adminResolvers } from "../../../utils/adminResolvers";
import User from "../../../entities/User/User";
import { getRepository, Between } from "typeorm";
import { GetGendersQueryArgs, GetGendersResponse, MonthGender } from "../../../graph";

/**
 *  GetGenders (유저들의 성별 검색)
 *  
 *  2가지 경우로 나뉜다.
 *  [1] 전체 유저들을 검색.
 *  [2] 6개월차 이하의 구간의 유저들을 검색. - 6개월은 클라이언트 단에서 제한한다.
 */
// 해야할 일: 관리자 계정을 필터링 해야함.

const resolvers: Resolvers = {
    Query: {
        GetGenders: adminResolvers(async(_, args: GetGendersQueryArgs): Promise<GetGendersResponse> => {
            /**
             *  GetGenders
             *  2가지 경우로 나뉜다.
             *  제한 조건 6개월치 이하만 검색가능.
             *  
             */

            /**
             *  dateFrom - 시작 날짜
             *  dateTo - 종료 날짜
             */
            const { dateFrom, dateTo } = args;
            // [1]
            if(dateFrom === null && dateTo === null) {
                try {
                    const users: User[] = await User.find();
                    const total: number = users.length;
                    const men: number = users.filter(user => user.gender === "M").length;
                    const women: number = total - men;
                    return {
                        ok: true,
                        error: null,
                        monthGender: [
                            {
                                month: null,
                                men,
                                women
                            }
                        ]
                    };
                } catch(error) {
                    return {
                        ok: false,
                        error: error.message,
                        monthGender: null
                    };
                }
            }
            
            // [2]
            if(dateFrom && dateTo) {
                // 구간 검색.
                try {
                    const startDate = new Date(dateFrom.dateStartYear, dateFrom.dateStartMonth - 1);
                    const endDate = new Date(dateTo.dateStartYear, dateTo.dateStartMonth - 1);
                    
                    const startMonth = startDate.getMonth();
                    const endMonth = endDate.getMonth();
                    let monthCnt =  startDate.getFullYear() < endDate.getFullYear() ? (12 - startMonth + endMonth) : (endMonth - startMonth);

                    let monthGender: Array<MonthGender>  = [];

                    for(var i = 0; i <= monthCnt; i++) {
                        const month = startMonth + i;
                        const currentMonth = month % 12;
                        let currentYear = startDate.getFullYear();

                        if(month > 11) { // 12월 넘어가는 경우
                            currentYear += 1;
                        }
                        // console.log("CURRENT YEAR: ", currentYear);
                        // console.log("CURRENT MONTH: ", currentMonth);
                        const tmpStartDate = new Date(currentYear, currentMonth, 1);
                        const lastDate = new Date(currentYear, currentMonth + 1, 0,  23, 59, 59).getDate();
                        // console.log("lastDay: ", lastDate);
                        // console.log("LAST DATE: ",new Date(currentYear, currentMonth + 1, 0, 23, 59));
                        const tmpEndDate = new Date(currentYear, currentMonth, lastDate, 23, 59, 59);
                        const users: User[] = await getRepository(User).find({
                            createdAt: Between(tmpStartDate, tmpEndDate)
                        });
                        // console.log("TOTAL USER: ", users);
                        const men = users.filter(user => user.gender === "M").length;
                        const women = users.length - men;
                        monthGender = [
                            ...monthGender,
                            {
                                month: currentMonth + 1,
                                men,
                                women
                            }
                        ];
                    }
                    return {
                        ok: true,
                        error: null,
                        monthGender
                    };
                } catch(error) {
                    return {
                        ok: false,
                        error: error.message,
                        monthGender: null
                    };
                }
            }
            // [3] 올바르지 않은 요청
            return {
                ok: false,
                error: "Wrong Request",
                monthGender: null
            };
        })
    }
};

export default resolvers;