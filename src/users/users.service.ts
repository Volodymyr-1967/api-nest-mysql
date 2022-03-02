import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const existEmail = await this.usersRepository.findOne({
      user_email: createUserDto.email,
    });
    if (existEmail)
      throw new HttpException(
        `Email ${createUserDto.email} already exists`,
        HttpStatus.CONFLICT,
      );

    const newUser = new UserEntity();
    newUser.user_name = createUserDto.name;
    newUser.user_email = createUserDto.email;
    newUser.created = new Date();
    newUser.updated = new Date();
    return await this.usersRepository.save(newUser);
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = new UserEntity();
    updateUser.user_name = updateUserDto.name;
    updateUser.user_email = updateUserDto.email;
    updateUser.updated = new Date();
    return await this.usersRepository.save(updateUser);
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}
