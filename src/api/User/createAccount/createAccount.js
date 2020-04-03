import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    createAccount: async(_, args) => {
      const {userName, firstName="", lastName="", email, bio=""} = args;
      return await prisma.createUser({userName, email, firstName, lastName, bio})
    }
  }
}