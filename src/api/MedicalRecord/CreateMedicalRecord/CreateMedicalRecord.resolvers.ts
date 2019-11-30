import { Resolvers } from "../../../types/resolvers";
import { privateResolvers } from "../../../utils/privateResolvers";
// import { CreateMedicalRecordMutationArgs, CreateMedicalRecordResponse } from "../../../graph";
// import Cold from "../../../entities/Symptoms/Cold";
import { CreateMedicalRecordMutationArgs, CreateMedicalRecordResponse } from "../../../graph";
import Cold from "../../../entities/Symptoms/Cold";
// import Cold from "../../../entities/Symptoms/Cold";
// import Colic from "../../../entities/Symptoms/Colic";
// import Cold from "../../../entities/Symptoms/Cold";
// import { createSymptom } from "../../../utils/createSymptom";
// import { createSymptom } from "../../../utils/createSymptom";
// import User from "../../../entities/User/User";
// import { createSymptom } from "../../../utils/createSymptom";
// import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";


const resolvers: Resolvers = {
    Mutation: {
        CreateMedicalRecord: privateResolvers(async (_, args: CreateMedicalRecordMutationArgs, { req }): Promise<CreateMedicalRecordResponse> => {
                
            // try {
                await Cold.create({
                    medicalRecord: null,
                    cold_cough: true,
                    cold_fever: true,
                    cold_headache: true,
                    cold_muscle: true,
                    cold_snot: true,
                    cold_throat: true
                });
            //     console.log("COLD: ", cold);
            // } catch(error) {
            //     console.log("ERROR: ", error);
            // }
            
            // const user: User = req.user;
            // const { status } = args;
            // await createSymptom(status, args);
            // console.log("symptom: ", symptom);
            // if(symptom) {
            //     console.log("SYMPTOM: ", symptom);
            //     console.log("CURRENT USER: ", user.fullName);
            // }
            try {
                // const medicalRecord = await MedicalRecord.create({
                //     ...args,
                //     symptom,
                //     patient: user,
                // }).save();
                return {
                    ok: true,
                    error: null,
                    medicalRecordId: null
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