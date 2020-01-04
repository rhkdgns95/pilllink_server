import { Resolvers } from "../../../types/resolvers";
import { CreateConfirmResponse, CreateConfirmMutationArgs } from "../../../graph";
import { privateResolvers } from "../../../utils/privateResolvers";
import ConfirmRecord from "../../../entities/ConfirmRecord/ConfirmRecord";
import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";
// import ConfirmRecord from "../../../entities/ConfirmRecord/ConfirmRecord";
// import MedicalRecord from "../../../entities/MedicalRecord/MedicalRecord";

const resolvers: Resolvers = {
    Mutation: {
        CreateConfirm: privateResolvers(async (_, args: CreateConfirmMutationArgs, { req }): Promise<CreateConfirmResponse> => {
            console.log('args:',  args);
            // let confirms: Array<ConfirmRecord> = [];
            // let promises, promises2;
            // let error: string | null = null;
            // for문으로 변경하기.
            const { data: confirmArr } = args;
            for(var i = 0; i < confirmArr.length; i++) {
                try {
                    const confirmRecord = confirmArr[i];
                    const medicalRecord = await MedicalRecord.findOne({
                        id: confirmRecord.medicalRecordId
                    });
                    
                    delete confirmRecord.medicalRecordId;
                    
                    if(medicalRecord) {
                        await ConfirmRecord.create({
                            ...confirmRecord,
                            medicalRecord
                        }).save();
                        
                    } else {
                        return {
                            ok: false,
                            error: "Not Found MedicalRecord"
                        };
                    }
                    console.log("생성완료! : ", i );
                } catch(error) {
                    return {
                        ok: false,
                        error: error.message
                    }
                }
            }
            console.log("End : ", i );
            return {
                ok: true,
                error: null
            };
        })
    }
};

export default resolvers;