import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import { Profile } from '../entities/Profile';
import { Category } from '../entities/Category';
import { Bookmark } from '../entities/Bookmark';
import { Tag } from '../entities/Tag';
import { Webpage } from '../entities/Webpage';
import { Email } from '../entities/Email';
import { Application } from '../entities/Application';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'tags-pass',
  dropSchema: false,
  synchronize: true,
  logging: false,
  entities: [
    User,
    Profile,
    Category,
    Tag,
    Bookmark,
    Webpage,
    Email,
    Application,
  ],
  subscribers: [],
  migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);
export const ProfileModel = AppDataSource.getRepository(Profile);
export const CategoryModel = AppDataSource.getRepository(Category);
export const BookmarkModel = AppDataSource.getRepository(Bookmark);
export const TagModel = AppDataSource.getRepository(Tag);
export const WebpageModel = AppDataSource.getRepository(Webpage);
export const EmailModel = AppDataSource.getRepository(Email);
export const ApplicationModel = AppDataSource.getRepository(Application);
