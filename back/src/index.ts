import 'reflect-metadata';
import server from './server';
import { PORT } from './config/envs';
import { AppDataSource } from './config/data-source';
import { preloadDataUsers } from './helpers/preloadData';

console.log(`Attempting to start server on port ${PORT}`);

const initializeApp = async () => {
  await AppDataSource.initialize();
  await preloadDataUsers();
  server
    .listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
    .on('error', (err) => {
      console.error('Server failed to start:', err);
    });
};

initializeApp();

export default server;
