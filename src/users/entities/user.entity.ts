import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // { name: 'USERS', database: process.env.DB_DATABASE })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_name: string;

  @Column()
  user_email: string;

  @Column({
    default: '0000-00-00 00:00:00',
  })
  created: Date;

  @Column()
  updated: Date;
}
