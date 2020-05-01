import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async(_, args, {request}) => {
      const {userName, firstName="", lastName="", email, bio=""} = args;
      return prisma.createUser({userName, email, firstName, lastName, bio});
    }
  }
}