import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export type UserRoleType = 'admin' | 'editor' | 'ghost';

@Entity() // { name: 'USERS', database: process.env.DB_DATABASE })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_name: string;

  @Column()
  user_email: string;

  @Column({
    type: 'enum',
    enum: ['admin', 'editor', 'guest'],
    default: 'guest',
  })
  role: UserRoleType;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  updated: Date;
}
