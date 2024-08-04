import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User, IUser } from './User';
import { Category, ICategory } from './Category';
import { Tag, ITag } from './Tag';

export interface IBookmark {
  id: number;
  user: IUser;
  category: ICategory;
  title: string;
  link: string;
  public: boolean;
  description: string;
  created_at: Date;
  updated_at: Date;
  tags: ITag[];
}

@Entity()
export class Bookmark implements IBookmark {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.bookmarks)
  user: User; // Change IUser to User

  @ManyToOne(() => Category, (category) => category.bookmarks)
  category: Category;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  public: boolean;

  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Tag, (tag) => tag.bookmarks)
  @JoinTable()
  tags: Tag[];
}
