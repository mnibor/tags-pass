import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  avatar: string;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  biography: string;

  @OneToOne(() => User, (user) => user.profile)
  user: User;
}

// Interfaces
export interface ProfileInterface {
  id: number;
  name: string;
  avatar: string;
  location: string;
  biography: string;
  user: User;
}

export interface ProfileCreateInterface {
  name: string;
  avatar: string;
  location: string;
  biography: string;
}

export interface ProfileUpdateInterface {
  name?: string;
  avatar?: string;
  location?: string;
  biography?: string;
}
