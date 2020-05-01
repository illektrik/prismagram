exports.typeDefs = `
  type User {
    id: ID!,
    name: String!
  }
  
  type Huinya {
    id: ID!,
    name: String
  }
  
  type Mutation {
    hi: String
  }
  
  type Query {
    hi: String
  }
`;

