import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User, IUser } from './User';

// Interfaz para Profile
export interface IProfile {
  id: number;
  name: string;
  avatar: string;
  location: string;
  biography: string;
  user: IUser;
}

@Entity()
export class Profile implements IProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  location: string;

  @Column()
  biography: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
