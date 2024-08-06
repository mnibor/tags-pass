import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
} from 'typeorm';
import { User } from './User';
import { Bookmark } from './Bookmark';
import slug from 'slug';

// Interfaz para Tag
export interface ITag {
  id: number;
  name: string;
  slug: string;
  user: User;
  bookmarks: Bookmark[];
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class Tag implements ITag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 80 })
  slug: string;

  @ManyToOne(() => User, (user) => user.tags)
  user: User;

  @ManyToMany(() => Bookmark, (bookmark) => bookmark.tags)
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
