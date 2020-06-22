import {isAuthenticated} from "../../../middlewares";
import {prisma} from "../../../../generated/prisma-client";
import {NEWLIKE_FRAGMENT} from "../../../fragments";

export default {
  Query: {
    seeNewLikes: async(_, __, {request}) => {
      isAuthenticated(request);
      const {user} = request;
      return prisma.newLikes({where: {user: {id: user.id}}}).$fragment(NEWLIKE_FRAGMENT)
    }
  }
}