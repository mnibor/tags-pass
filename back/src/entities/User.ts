import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from './Profile';
import { Bookmark } from './Bookmark';
import { Category } from './Category';
import { Tag } from './Tag';
import { Email } from './Email';
import { Webpage } from './Webpage';
import { Application } from './Application';

// Interfaz para User
export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
  status: boolean;
  created_at: Date;
  updated_at: Date;
  profile?: Profile;
  bookmarks?: Bookmark[];
  categories?: Category[];
  tags?: Tag[];
  emails?: Email[];
  webpages?: Webpage[];
  applications?: Application[];
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
