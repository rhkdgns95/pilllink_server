import { Resolvers } from "../../../types/resolvers";
import { CreateConfirmResponse, CreateConfirmMutationArgs } from "../../../graph";
import { privateResolvers } from "../../../utils/privateResolvers";
import ConfirmRecord from "../../../entities/ConfirmRecord/ConfirmRecord";
import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";

const resolvers: Resolvers = {
    Mutation: {
        CreateConfirm: privateResolvers(async (_, args: CreateConfirmMutationArgs, { req }): Promise<CreateConfirmResponse> => {
            const { medicalRecordId } = args;
            try {
                const medicalRecord: MedicalRecord | undefined = await MedicalRecord.findOne({
                    id: medicalRecordId
                });
                if(medicalRecord) {
                    if(!medicalRecord.confirmId) {
                        const confirmRecord: ConfirmRecord = await ConfirmRecord.create({
                            ...args,
                            medicalRecord
                        }).save();

                        return {
                            ok: true,
                            error: null,
                            confirmRecordId: confirmRecord.id
                        }   
                        
                    } else {
                        return {
                            ok: false,
                            error: "Already confirm",
                            confirmRecordId: null
                        };
                    }
                } else {
                    return {
                        ok: false,
                        error: "Not found medical record",
                        confirmRecordId: null
                    }
                }
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    confirmRecordId: null
                };
            }
        })
    }
};

export default resolvers;