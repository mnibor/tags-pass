import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { Profile } from '../entities/profile.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'tags-pass',
  dropSchema: true,
  synchronize: true,
  logging: false,
  entities: [User, Profile],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const ProfileModel = AppDataSource.getRepository(Profile);
