import { Resolvers } from "../../../types/resolvers";
import User from "../../../entities/User/User";
import { privateResolvers } from "../../../utils/privateResolvers";
import { CreateBoardMutationArgs, CreateBoardResponse } from "../../../graph";
import { Board } from "../../../entities/Board/Board";

const resolvers: Resolvers = {
    Mutation: {
        CreateBoard: privateResolvers(async(_, args: CreateBoardMutationArgs, { req }): Promise<CreateBoardResponse> => {
            const user: User = req.user;
            try {
                const board = await Board.create({
                    ...args,
                    writer: user
                }).save();
                return {
                    ok: true,
                    error: null,
                    boardId: board.id
                };
            } catch(error) {
                return {
                    ok: false,
                    error: error.message,
                    boardId: null
                };
            }
        })
    }
};

export default resolvers;