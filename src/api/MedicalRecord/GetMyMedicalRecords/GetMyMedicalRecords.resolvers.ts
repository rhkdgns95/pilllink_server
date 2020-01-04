import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
import User from "../../../entities/User/User";
import { GetMyMedicalRecordsResponse, GetMyMedicalRecordsQueryArgs } from "../../../graph";
import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";

/**
 *  진료기록 가져오는 것.
 *  
 *  다음 3가지 경우로 나누어 출력.
 *  1. 전체 기록 출력 (first, offset 둘다 없는경우)
 *  2. 0부터 갯수만 출력 (first만 있는경우, offset 없는경우)
 *  3. 구간 출력, Pagination (first와 offset이 있는경우)
 */
const resolvers: Resolvers = {
    Query: {
        GetMyMedicalRecords: privateResolvers(async (_, args: GetMyMedicalRecordsQueryArgs, { req }): Promise<GetMyMedicalRecordsResponse> => {
            const user: User = req.user;
            const { first, offset = 0 } = args;
            // [1] 전체 데이터가져오기.
            if(first === null) {
                try {
                    const medicalRecords: Array<MedicalRecord> = await MedicalRecord.find({
                        where: {
                            patientId: user.id
                        },
                        order: {
                            createdAt: "ASC",
                        },
                        relations: ['confirm', 'patient' ]
                        // relations: ['patient', 'confirm']
                        // relations: [ 'confirm' ]
                    });
                    return {
                        ok: true,
                        error: null,
                        medicalRecords,
                        totalCount: medicalRecords.length
                    }
                } catch(error) {
                    return {
                        ok: false,
                        error: error.message,
                        medicalRecords: null,
                        totalCount: null
                    };
                }
            } else { 
                // [3] 페이지 네이션 사용하기.
                if(offset !== null) {
                    try {
                        const medicalRecords: Array<MedicalRecord> | undefined = await MedicalRecord.find({
                            skip: offset,
                            take: first,
                            order: {
                                createdAt: "DESC"
                            },
                            where: {
                                patientId: user.id
                            },
                            relations: ['confirm']
                        });
                        return {
                            ok: true,
                            error: null,
                            medicalRecords,
                            totalCount: medicalRecords.length
                        };
                    } catch(error) {
                        return {
                            ok: false,
                            error: error.message,
                            medicalRecords: null,
                            totalCount: null
                        };
                    }
                } else { 
                    // [2] 최대갯수 가져오기.
                    try {
                        const medicalRecords: Array<MedicalRecord> | undefined = await MedicalRecord.find({
                            take: first,
                            order: {
                                createdAt: "DESC"
                            },
                            where: {
                                patientId: user.id
                            }
                        });
                        return {
                            ok: true,
                            error: null,
                            medicalRecords,
                            totalCount: medicalRecords.length
                        };
                    } catch(error) {
                        return {
                            ok: false,
                            error: error.message,
                            medicalRecords: null,
                            totalCount: null
                        };
                    }
                }
            }
        })
    }
};

export default resolvers;