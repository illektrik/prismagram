import {isAuthenticated} from "../../../middlewares";
import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    setNewLike: async(_, args, {request}) => {
      isAuthenticated(request);
      const user = {request};
      const {userId, postId} = args;
      const newLike = await prisma.createNewLike({user: {
          connect: {
            id: userId
          }
        },
        post: {
          connect: {
            id: postId
          }
        },
        from: {
          connect: {
            id: user.id
          }
        }
      });
      console.log(userId, postId);
      return newLike
    }
  }
}