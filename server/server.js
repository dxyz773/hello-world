import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const typeDefs = `#graphql
# schema {
#   query: Query
#  defaults to this so can leave it out}
type Query {
  greeting: String
}
`;

const resolvers = {
  Query: { greeting: () => "Hello, World from GraphQL" },
};

const server = new ApolloServer({ typeDefs, resolvers });

const { url } = await startStandaloneServer(server, { listen: { port: 9000 } });

console.log(`Server running at ${url}`);
