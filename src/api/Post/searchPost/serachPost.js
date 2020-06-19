import {prisma} from "../../../../generated/prisma-client";
import {FULL_POST_FRAGMENT} from "../../../fragments";

export default {
  Query: {
    searchPost: async (_, args) => prisma.posts({where: {
        OR: [{location_starts_with: args.term}, {caption_starts_with: args.term}]
      }}).$fragment(FULL_POST_FRAGMENT)
  }
}