import {isAuthenticated} from "../../../middlewares";
import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    deleteNewLikes: async (_, args, {request}) => {
      isAuthenticated(request);
      const {likesId} = args;
      try {
        await prisma.deleteManyNewLikes({id_in:likesId});
        return true
      } catch (e) {
        console.log(e);
        return false
      }
    }
  }
}