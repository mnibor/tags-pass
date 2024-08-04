import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User, IUser } from './User';
import { Bookmark, IBookmark } from './Bookmark';

export interface ICategory {
  id: number;
  user: IUser;
  name: string;
  slug: string;
  bookmarks: IBookmark[];
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @ManyToOne(() => User, (user) => user.categories)
  user: IUser; // Corrección aquí

  @OneToMany(() => Bookmark, (bookmark) => bookmark.category)
  bookmarks: Bookmark[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
