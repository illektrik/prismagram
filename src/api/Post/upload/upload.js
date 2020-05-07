import {isAuthenticated} from "../../../middlewares";

export default {
  Mutation: {
    upload: async (_, args, {request}) => {
      isAuthenticated(request);
      const {caption, files} = args;
    }
  }
}