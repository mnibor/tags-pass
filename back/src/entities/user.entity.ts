import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Profile } from './profile.entity';
import { Category } from './categoryBookmark.entity';
import { Tag } from './tag.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  status: boolean;

  @OneToOne(() => Profile, { cascade: true, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'profile_id' })
  profile: Profile;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @Column({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;
}

// Interfaces
export interface UserInterface {
  id: number;
  username: string;
  email: string;
  password: string;
  status: string;
  profile: Profile;
  created_at: Date;
  updated_at: Date;
}

export interface UserCreateInterface {
  username: string;
  email: string;
  password: string;
  status: string;
}

export interface UserUpdateInterface {
  username?: string;
  email?: string;
  password?: string;
  status?: string;
}
