import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './User';

export interface IApplication {
  id: number;
  user: User;
  name: string;
  email: string;
  password: string;
  comments: string;
  created_at: Date;
  updated_at: Date;
}
@Entity()
export class Application {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.applications)
  user: User;

  @Column({ length: 80 })
  name: string;

  @Column({ length: 80 })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true, length: 250 })
  comments: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
