import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile, IProfile } from './Profile';
import { Bookmark, IBookmark } from './Bookmark';
import { Category, ICategory } from './Category';
import { Tag, ITag } from './Tag';
import { Email, IEmail } from './Email';
import { Webpage, IWebpage } from './Webpage';
import { Application, IApplication } from './Application';

// Interfaz para User
export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  profile?: IProfile;
  bookmarks?: IBookmark[];
  categories?: ICategory[];
  tags?: ITag[];
  emails?: IEmail[];
  webpages?: IWebpage[];
  applications?: IApplication[];
}

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  status: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToOne(() => Profile, (profile) => profile.user)
  profile?: Profile;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.user)
  bookmarks?: Bookmark[]; // Correct type to Bookmark[]

  @OneToMany(() => Category, (category) => category.user)
  categories?: Category[];

  @OneToMany(() => Tag, (tag) => tag.user)
  tags?: Tag[];

  @OneToMany(() => Email, (email) => email.user)
  emails?: Email[];

  @OneToMany(() => Webpage, (webpage) => webpage.user)
  webpages?: Webpage[];

  @OneToMany(() => Application, (application) => application.user)
  applications?: Application[];
}
