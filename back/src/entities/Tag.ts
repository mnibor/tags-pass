import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User, IUser } from './User';
import { Bookmark, IBookmark } from './Bookmark';

// Interfaz para Tag
export interface ITag {
  id: number;
  name: string;
  slug: string;
  user: IUser;
  bookmarks: IBookmark[];
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class Tag implements ITag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @ManyToOne(() => User, (user) => user.tags)
  user: User;

  @ManyToMany(() => Bookmark, (bookmark) => bookmark.tags)
  bookmarks: Bookmark[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
