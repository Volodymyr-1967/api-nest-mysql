import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { RoleEnum } from '../entities/user.entity';

export class UserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @ApiProperty({
    description: `User's role`,
    example: 'admin',
    default: 'guest',
  })
  role?: RoleEnum;
}
