import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User, IUser } from './User';

export interface IWebpage {
  id: number;
  user: IUser;
  name: string;
  url: string;
  email: string;
  password: string;
  comments: string;
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class Webpage {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.webpages)
  user: User;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  comments: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
