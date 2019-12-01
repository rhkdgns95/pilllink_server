import { Resolvers } from "../../../types/resolvers";
import { UpdateConfirmRecordMutationArgs, UpdateConfirmRecordResponse } from "../../../graph";
import { privateResolvers } from "../../../utils/privateResolvers";
import ConfirmRecord from "../../../entities/ConfirmRecord/ConfirmRecord";

const resolvers: Resolvers = {
    Mutation: {
        UpdateConfirmRecord: privateResolvers(async (_, args: UpdateConfirmRecordMutationArgs): Promise<UpdateConfirmRecordResponse> => {
            const { confirmRecordId, result } = args;
            try {
                const existConfirmRecord: ConfirmRecord | undefined = await ConfirmRecord.findOne({
                    id: confirmRecordId
                });
                if(existConfirmRecord) {
                    await ConfirmRecord.update({
                        id: confirmRecordId
                    }, {
                        result
                    });
                    return {
                        ok: true,
                        error: null,
                        confirmRecordId: confirmRecordId
                    };
                } else {
                    return {
                        ok: false,
                        error: "No confirm record",
                        confirmRecordId
                    };
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