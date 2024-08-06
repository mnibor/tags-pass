import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { User } from './User';
import { Bookmark } from './Bookmark';
import slug from 'slug';

export interface ICategory {
  id: number;
  user: User;
  name: string;
  slug: string;
  bookmarks: Bookmark[];
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 80 })
  slug: string;

  @ManyToOne(() => User, (user) => user.categories)
  user: User;

  @OneToMany(() => Bookmark, (bookmark) => bookmark.category)
  bookmarks: Bookmark[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  generateSlug() {
    this.slug = slug(this.name);
  }
}
