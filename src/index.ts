import { startStandaloneServer } from '@apollo/server/standalone';
import { connect } from 'mongoose';
import dotenv from 'dotenv';

import server from './server';

// helps read the env file
dotenv.config();

const PORT = Number(process.env.PORT) || 3001;

const startServer = async () => {
  // CONNECT TO DATABASE
  await connect(String(process.env.DATABASE_URL));

  // start apollo server
  const { url } = await startStandaloneServer(server, {
    listen: { port: PORT },
  });
  console.log(`listening on ${url}`);
};

startServer();
