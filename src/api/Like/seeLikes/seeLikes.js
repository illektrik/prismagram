import {isAuthenticated} from "../../../middlewares";
import {prisma} from "../../../../generated/prisma-client";
import {LIKE_FRAGMENT} from "../../../fragments";

export default {
  Query: {
    seeLikes: async(_, __, {request}) => {
      isAuthenticated(request);
      const {user} = request;
      return prisma.likes({where: {user: {id: user.id}}}).$fragment(LIKE_FRAGMENT)
    }
  }
}