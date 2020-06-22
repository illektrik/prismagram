
export const USER_FRAGMENT = `
  
    id
    userName
    avatar
`;

export const COMMENT_FRAGMENT = `
  
    id
    text
    user {
      ${USER_FRAGMENT}
    }
 
`;

export const FILE_FRAGMENT = `
  
    id
    url
 
`;

export const FULL_POST_FRAGMENT = `
  fragment PostParts on Post {
    caption
    location
    id
    createdTime
    files {
      id
      url
    }
    comments {
      ${COMMENT_FRAGMENT}
    }
    user {
      ${USER_FRAGMENT}
    }
  }
`;

export const MESSAGE_FRAGMENT = `
  id
  test
  to {
    ${USER_FRAGMENT}
  }
  from {
    ${USER_FRAGMENT}
  }
`;

export const ROOM_FRAGMENT = `
  fragment RoomParts on Room {
    id
    participants { ${USER_FRAGMENT } }
    messages { ${MESSAGE_FRAGMENT} }
  }
`;

export const NEWLIKE_FRAGMENT = `
  fragment NewLikeParts on NewLike {
    id
    user {
      id
    }
    post {
      id
    }
  }
`;

export const SEE_USER_FRAGMENT =`
  fragment UserParts on User {
    id
    userName
    avatar
    firstName
    lastName
    bio
    likes {
      id
    }
    followers{
      id
    }
    following {
      id
    }
    comments {
      id
    }
  }
`;