import {isAuthenticated} from "../../../middlewares";
import {prisma} from "../../../../generated/prisma-client";
import {FULL_POST_FRAGMENT, SEE_USER_FRAGMENT} from "../../../fragments";

export default {
  Query: {
    seeUser: async (_, args) => {
      const {userName} = args;
      const user = await prisma.user({userName}).$fragment(SEE_USER_FRAGMENT);
      const posts = await prisma.user({userName}).posts().$fragment(FULL_POST_FRAGMENT);
      return {
        user,
        posts
      }
    }
  }
}