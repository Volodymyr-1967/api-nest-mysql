import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum RoleEnum {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

@Entity()
export class UserEntity {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  email: string;

  @ApiProperty()
  @Column({ default: '' })
  pass_hash: string;

  @ApiProperty()
  @Column({
    default: 'guest',
  })
  role: RoleEnum;

  @ApiProperty()
  @CreateDateColumn()
  created: Date;

  @ApiProperty()
  @UpdateDateColumn()
  updated: Date;
}
