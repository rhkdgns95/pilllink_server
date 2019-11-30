import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
import User from "../../../entities/User/User";
import { GetMyMedicalRecordsResponse } from "../../../graph";
import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";

const resolvers: Resolvers = {
    Query: {
        GetMyMedicalRecords: privateResolvers(async (_, __, { req }): Promise<GetMyMedicalRecordsResponse> => {
            const user: User = req.user;
            console.log("USER: ", user);
            try {
                const medicalRecords: Array<MedicalRecord> = await MedicalRecord.find({
                    where: {
                        patientId: user.id
                    },
                    relations: ['patient']
                    // relations: [ 'confirm' ]
                });
                console.log(" medicalRecords: ", medicalRecords);
                return {
                    ok: true,
                    error: null,
                    medicalRecords
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    medicalRecords: null
                };
            }
        })
    }
};

export default resolvers;