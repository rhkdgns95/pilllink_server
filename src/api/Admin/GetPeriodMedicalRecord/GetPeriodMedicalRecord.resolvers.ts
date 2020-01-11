import { Resolvers } from "../../../types/resolvers";
import { adminResolvers } from "../../../utils/adminResolvers";
import { GetPeriodMedicalRecordQueryArgs, GetPeriodMedicalRecordResponse, GetPeriodMedicalRecordData } from "../../../graph";
import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";
import { Between } from "typeorm";

const resolvers: Resolvers = {
    Query: {
        GetPeriodMedicalRecord: adminResolvers(async (_, args: GetPeriodMedicalRecordQueryArgs): Promise<GetPeriodMedicalRecordResponse> => {
            const { date: { startDate, endDate }} = args;    
            const { year: startYear, month: startMonth, day: startDay } = startDate;
            const { year: endYear, month: endMonth, day: endDay } = endDate;
            let monthCnt = startYear < endYear ? (endYear - startYear) * 12 + endMonth - startMonth + 1 : endMonth - startMonth + 1;
            
            const startD = new Date(startYear, startMonth - 1, startDay);
            const endD = new Date(endYear, endMonth - 1, endDay);

            const diffDay: number = Math.ceil((endD.getTime() - startD.getTime())/((3600 * 1000) * 24));
            // const diffDay: number = endD.getDate() - startD.getDate();

            /**
             *  구간 별 검색하기
             *  [1] 일 별로
             *  [2] 월 별로
             */
            try {
                let data: Array<GetPeriodMedicalRecordData> = [];
                if(diffDay <= 6 || monthCnt <= 1) { 
                    // [1]
                    const tmpCurrentYear = startYear;
                    const tmpCurrentMonth = startMonth - 1;
                    for(var i = 0; i <= diffDay; i++) {
                        const tmpCurrentDay = startDay + i;
                        const tmpStartDate = new Date(tmpCurrentYear, tmpCurrentMonth, tmpCurrentDay);
                        const tmpEndDate = new Date(tmpCurrentYear, tmpCurrentMonth, tmpCurrentDay, 23, 59, 59);

                        const medicalRecords: Array<MedicalRecord> = await MedicalRecord.find({
                            createdAt: Between(tmpStartDate, tmpEndDate)
                        });
                        
                        const year: string = (tmpEndDate.getFullYear() + "").substr(2);
                        const month: string = ("0" + (tmpEndDate.getMonth() + 1) + "").substr(-2);
                        const day: string = ("0" + (tmpEndDate.getDate())).substr(-2);

                        data.push({
                            title: `${year}-${month}-${day}`,
                            count: medicalRecords.length
                        });
                    }
                } else {
                    // [2]
                    for(var i = 0; i < monthCnt; i++) {
                        const month = startMonth + i;
                        const tmpCurrentYear = month > 12 ? startYear + Math.floor(month / 12) : startYear;
                        const tmpCurrentMonth = (month - 1) % 12;
                        let tmpDay = 1;
                        if(i === 0) { // 시작날의 (일)
                            tmpDay = startDay; 
                        }
                        const tmpStartDate = new Date(tmpCurrentYear, tmpCurrentMonth, tmpDay); // 달은 0부터 시작함.
                        let tmpEndDate = new Date(tmpCurrentYear, tmpCurrentMonth + 1, 1, 0, 0, 0, -1);
                        if(monthCnt === (i + 1)) { // 구하기 마지막 달인경우는 마지막 일을 가져온다.
                            tmpEndDate = new Date(tmpCurrentYear, tmpCurrentMonth, endDay, 23, 59, 59);
                        }

                        const medicalRecords: Array<MedicalRecord> = await MedicalRecord.find({
                            createdAt: Between(tmpStartDate, tmpEndDate)
                        });

                        const year: string = (tmpCurrentYear + "").substr(2);
                        const monthStr: string = ("0" + (tmpCurrentMonth + 1)).substr(-2);
                        

                        if(i === 0) {
                            const lastDay = tmpEndDate.getDate();
                            const dayStr: string = ("0" + tmpDay).substr(-2) + "~" + lastDay;
                            
                            data.push({
                                title: `${year}.${monthStr}.${dayStr}`,
                                count: medicalRecords.length
                            });
                        } else if(monthCnt === (i + 1)) {""
                            const dayStr: string = "01~" + ("0" + endDay).substr(-2);
                            data.push({
                                title: `${year}.${monthStr}.${dayStr}`,
                                count: medicalRecords.length
                            });
                        } else {
                            const lastDay = tmpEndDate.getDate();
                            const dayStr: string = "01~" + lastDay;
                            data.push({
                                title: `${year}.${monthStr}.${dayStr}`,
                                count: medicalRecords.length
                            });
                        }
                    }
                }
                return {
                    ok: true,
                    error: null,
                    data
                };
                
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    data: null
                };
            }
        })
    }
};

export default resolvers;