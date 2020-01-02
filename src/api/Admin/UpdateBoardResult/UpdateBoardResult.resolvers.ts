import { Resolvers } from "../../../types/resolvers";
import { adminResolvers } from "../../../utils/adminResolvers";
import { UpdateBoardResultMutationArgs, UpdateBoardResultResponse } from "../../../graph";
import { Board } from "../../../entities/Board/Board";

const resolvers: Resolvers = {
    Mutation: {
        UpdateBoardResult: adminResolvers(async (_, args: UpdateBoardResultMutationArgs): Promise<UpdateBoardResultResponse> => {
            try {
                const { boardId, result } = args;
                await Board.update({id: boardId}, { result });
                return {
                    ok: true,
                    error: null
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message
                };
            }
        })
    }
}

export default resolvers;