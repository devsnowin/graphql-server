import { readFileSync } from 'fs';
import { ApolloServer } from '@apollo/server';

import resolvers from '@/graphql/resolvers';

const typeDefs = readFileSync('./src/graphql/schema.graphql', 'utf-8');
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export default server;
