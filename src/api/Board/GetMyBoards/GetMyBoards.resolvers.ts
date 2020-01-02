import { Resolvers } from "../../../types/resolvers";
import { GetMyBoardsResponse, GetMyBoardsQueryArgs } from "../../../graph";
import User from "../../../entities/User/User";
import { Board } from "../../../entities/Board/Board";
import { privateResolvers } from "../../../utils/privateResolvers";

const resolvers: Resolvers = {
    Query: {
        GetMyBoards: privateResolvers(async (_, args: GetMyBoardsQueryArgs, { req }): Promise<GetMyBoardsResponse> => {
            const user: User = req.user;
            const { take, skip } = args;
            try {
                const boards = await Board.find({
                    take,
                    skip,
                    where: [
                        { writerId: user.id }
                    ],
                    order: {
                        createdAt: "ASC"
                    }
                });
                return {
                    ok: true,
                    error: null,
                    boards
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    boards: []
                };
            } 
        })
    }
};

export default resolvers;