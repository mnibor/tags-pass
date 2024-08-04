import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

export interface IEmail {
  id: number;
  user: User;
  name: string;
  url: string;
  email: string;
  recovery_email: string;
  password: string;
  comments: string;
  created_at: Date;
  updated_at: Date;
}

@Entity()
export class Email {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.emails)
  user: User;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column()
  email: string;

  @Column()
  recovery_email: string;

  @Column()
  password: string;

  @Column()
  comments: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
