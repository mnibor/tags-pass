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
import { User } from './User';
import { Category } from './Category';
import { Tag } from './Tag';

export interface IBookmark {
  id: number;
  user: User;
  category: Category;
  title: string;
  link: string;
  public: boolean;
  description: string;
  created_at: Date;
  updated_at: Date;
  tags: Tag[];
}

@Entity()
export class Bookmark implements IBookmark {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.bookmarks)
  user: User;

  @ManyToOne(() => Category, (category) => category.bookmarks)
  category: Category;

  @Column({ length: 200 })
  title: string;

  @Column()
  link: string;

  @Column({ default: false })
  public: boolean;

  @Column({ nullable: true, length: 250 })
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @ManyToMany(() => Tag, (tag) => tag.bookmarks)
  @JoinTable()
  tags: Tag[];
}
