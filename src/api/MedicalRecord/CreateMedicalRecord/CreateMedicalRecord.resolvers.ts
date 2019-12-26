import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
import { CreateMedicalRecordMutationArgs, CreateMedicalRecordResponse } from "../../../graph";
import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";
import User from "../../../entities/User/User";
import { cleanNullArgs } from "../../../utils/cleanNullArgs";

const resolvers: Resolvers = {
    Mutation: {
        CreateMedicalRecord: privateResolvers(async (_, args: CreateMedicalRecordMutationArgs, { req }): Promise<CreateMedicalRecordResponse> => {
            const user: User = req.user;
            try {
                const nullArgs = cleanNullArgs(args);
                const medicalRecord: MedicalRecord = await MedicalRecord.create({
                    ...nullArgs,
                    patient: user
                }).save();
                return {
                    ok: true,
                    error: null,
                    medicalRecordId: medicalRecord.id,
                    lang: medicalRecord.lang
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    medicalRecordId: null,
                    lang: null
                }
            }
        })
    }
};

export default resolvers;