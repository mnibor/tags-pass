import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'tags-pass',
  dropSchema: false,
  synchronize: true,
  logging: true, 
  entities: [],
  subscribers: [],
  migrations: [],
});
