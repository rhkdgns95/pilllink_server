import { Resolvers } from "../../../types/resolvers";
import { adminResolvers } from "../../../utils/adminResolvers";
import { Board } from "../../../entities/Board/Board";
import { GetUserBoardsResponse } from "../../../graph";

const resolvers: Resolvers = {
    Query: {
        GetUserBoards: adminResolvers(async (): Promise<GetUserBoardsResponse> => {
            try {
                const boards: Array<Board> = await Board.find({
                    order: { createdAt: "ASC" },
                    relations: [ "writer" ]
                }) || [];
                return {
                    ok: true,
                    error: null,
                    boards
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    boards: null
                };
            }
        })
    }
};

export default resolvers;