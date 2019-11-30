import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
import { CreateMedicalRecordMutationArgs, CreateMedicalRecordResponse } from "../../../graph";
import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";
import User from "../../../entities/User/User";



const resolvers: Resolvers = {
    Mutation: {
        CreateMedicalRecord: privateResolvers(async (_, args: CreateMedicalRecordMutationArgs, { req }): Promise<CreateMedicalRecordResponse> => {
            const user: User = req.user;
            try {
                const medicalRecord: MedicalRecord = await MedicalRecord.create({
                    ...args,
                    patient: user
                }).save();
                console.log("Medical: ", medicalRecord);
                return {
                    ok: true,
                    error: null,
                    medicalRecordId: medicalRecord.id
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    medicalRecordId: null
                }
            }
        })
    }
};

export default resolvers;