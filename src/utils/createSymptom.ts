// import { TStatus } from "../types/types"
// import { CreateMedicalRecordMutationArgs } from "../graph"
// import Colic from "../entities/Symptoms/Colic";
// import Female from "../entities/Symptoms/Female";
// import Hangover from "../entities/Symptoms/Hangover";
// import Headache from "../entities/Symptoms/Headache";
// import Other from "../entities/Symptoms/Other";
// import Skin from "../entities/Symptoms/Skin";
// import Toothache from "../entities/Symptoms/Toothache";
// import Cold from "../entities/Symptoms/Cold";
// // import Cold from "../entities/Symptoms/Cold"


// // type createSymptomResponse = Cold | Colic | Female | Hangover | Headache | Other | Skin | Toothache;

// const cleanUndefinedArgs = (args: object) => {
//     const cleanUndefined: any = {};
//     Object.keys(args).forEach(key => {
//         if(args[key] === undefined || args[key] === null) {
//             cleanUndefined[key] = false;
//         } else {
//             cleanUndefined[key] = true;
//         }
//     });
//     return cleanUndefined;
// }
// // const getBooleanData = (data: boolean | undefined | null): boolean => {
// //     return data == true;
// // }
// export const createSymptom = async(status: TStatus, args: CreateMedicalRecordMutationArgs): Promise<any> => {
//     // const cleanNull = cleanUndefinedArgs(args);
//     // let symptom: createSymptomResponse = await Colic.create({
//     //     ...cleanNull
//     // });
//     let symptom: any = {};
//     console.log("symptom:" ,symptom);
//     try {
//         switch(status) {
//             case "COLD":
//                 // const { cold_cough, cold_fever, cold_headache, cold_muscle, cold_snot, cold_throat } = args;
//                 // const coldArgs = {
//                 //     cold_cough:  false,
//                 //     cold_fever: true,
//                 //     cold_throat: true,
//                 //     cold_muscle: true,
//                 //     cold_headache: true,
//                 //     cold_snot: true,
//                 // } as any;
//                 await Cold.create({
//                     cold_cough: false,
//                     cold_fever: true,
//                     cold_throat: true,
//                     cold_muscle: true,
//                     cold_headache: true,
//                     cold_snot: true,
//                 }).save();

//             break;
                
//             case "COLIC":
//                 const { colic_sickness, colic_constipation, colic_diarrhead, colic_heartburn, colic_indigestion, colic_periodCramps } = args;
//                 const colicData = { colic_sickness, colic_constipation, colic_diarrhead, colic_heartburn, colic_indigestion, colic_periodCramps }
//                 const colicArgs = cleanUndefinedArgs(colicData);
//                 symptom = await Colic.create({ ...colicArgs }).save();
//             break;

//             case "FEMALE":
//                 const { female_tmp } = args;
//                 const femaleData = { female_tmp };
//                 const feamleArgs = cleanUndefinedArgs(femaleData);
//                 symptom = await Female.create({ ...feamleArgs }).save();
//             break;

//             case "HANGOVER":
//                 const { hangover_diarrhea, hangover_headache, hangover_heartburn, hangover_sickness, hangover_throwup } = args;
//                 const hangoverData = { hangover_diarrhea, hangover_headache, hangover_heartburn, hangover_sickness, hangover_throwup };
//                 const hangoverArgs = cleanUndefinedArgs(hangoverData);
//                 symptom = await Hangover.create({ ...hangoverArgs}).save();
//             break;

//             case "HEADACHE":
//                 const { headache_migraine, headache_headache } = args;
//                 const headacheData = { headache_migraine, headache_headache };
//                 const headacheArgs = cleanUndefinedArgs(headacheData);
//                 symptom = await Headache.create({ ...headacheArgs }).save();
//             break;

//             case "OTHER":
//                 const { other_tmp } = args;
//                 const otherData = { other_tmp };
//                 const otherArgs = cleanUndefinedArgs(otherData);
//                 symptom = await Other.create({ ...otherArgs }).save();
//             break;

//             case "SKIN":
//                 const { skin_abrasion, skin_acne, skin_athletesfoot, skin_blister, skin_eczema, skin_hives } = args;
//                 const skinData = { skin_abrasion, skin_acne, skin_athletesfoot, skin_blister, skin_eczema, skin_hives };
//                 const skinArgs = cleanUndefinedArgs(skinData);
//                 symptom = await Skin.create({ ...skinArgs }).save()
//             break;

//             case "TOOTHACHE":
//                 const { toothache_badbreath, toothache_drylips, toothache_drymouth, toothache_gum, toothache_needle, toothache_stomatitis } = args;
//                 const toothacheData = { toothache_badbreath, toothache_drylips, toothache_drymouth, toothache_gum, toothache_needle, toothache_stomatitis };
//                 const toothacheArgs = cleanUndefinedArgs(toothacheData);
//                 symptom = await Toothache.create({ ...toothacheArgs }).save();
//             break;
//         }
//         return null;
//         // return symptom;
//     } catch(error) {
//         console.log("createSymptom error: ", error);
//         throw new Error(error);
//     }
    
// }