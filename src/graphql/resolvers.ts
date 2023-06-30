import { Resolvers } from '@/generated/graphql';
import User from '@/models/user';

const books = [
  {
    id: 1,
    description:
      'Iste in ea est veniam. Doloribus optio vitae voluptates quasi et. Eos enim aliquid eius consequatur consectetur dolores cum rem.',
    year: 2002,
    title: 'Cat in the hat',
    author: 'James Dane',
  },
  {
    id: 2,
    description:
      'Omnis sint perferendis enim ratione laborum occaecati. Officiis ratione ut ut dolorem. Aspernatur sit quasi voluptas sit molestias saepe cum et aut.',
    year: 2020,
    title: 'Dynamic Paradigm Associate',
    author: 'Ada Kris',
  },
];

const resolvers: Resolvers = {
  Query: {
    getUsers: async (_, { limit }) => {
      const users = await User.find().limit(limit);
      return users;
    },

    getBooks: () => books,
  },
};

export default resolvers;
