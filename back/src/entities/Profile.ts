import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './User';

// Interfaz para Profile
export interface IProfile {
  id: number;
  name: string;
  avatar: string;
  location: string;
  biography: string;
  user: User;
}

@Entity()
export class Profile implements IProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, length: 80 })
  name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true, length: 80 })
  location: string;

  @Column({ nullable: true, length: 250 })
  biography: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
