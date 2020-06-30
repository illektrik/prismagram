import {isAuthenticated} from "../../../middlewares";
import {prisma} from "../../../../generated/prisma-client";

export default {
  Mutation: {
    upload: async (_, args, {request}) => {
      isAuthenticated(request);
      const {user} = request;
      const {caption, files, location} = args;
      const createdTime = (new Date().getTime()).toString();
      const post = await prisma.createPost({caption, createdTime, location, user: {connect: {id: user.id}}});
      files.forEach(async (file) => {
        await prisma.createFile({url: file, post: {connect: {id: post.id}}})
      });
      return post;
    }
  }
}