import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';

import { UserDto } from './dto/user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  async create(userDto: UserDto) {
    const existEmail = await this.usersRepository.findOne({
      email: userDto.email,
    });
    if (existEmail)
      throw new HttpException(
        `Email ${userDto.email} already exists`,
        HttpStatus.CONFLICT,
      );

    const hash = await bcrypt.hash(userDto.password, 10);

    const newUser = new UserEntity();
    newUser.name = userDto.name;
    newUser.email = userDto.email;
    newUser.pass_hash = hash;
    newUser.updated = new Date();

    if (
      userDto.role === 'admin' ||
      userDto.role === 'editor' ||
      userDto.role === 'guest'
    )
      newUser.role = userDto.role;
    else {
      throw new HttpException(
        `Role ${userDto.role} is not allowed`,
        HttpStatus.CONFLICT,
      );
    }

    return await this.usersRepository.save(newUser);
  }

  async findAll(dataDest: any, dataSort: any) {
    if (!dataDest && !dataSort) {
      dataSort = 'id';
      dataDest = 'ASC';
    }

    if (dataSort === 'id')
      return await this.usersRepository.find({
        order: {
          id: dataDest,
        },
      });

    if (dataSort === 'name')
      return await this.usersRepository.find({
        order: {
          name: dataDest,
        },
      });

    if (dataSort === 'email')
      return await this.usersRepository.find({
        order: {
          email: dataDest,
        },
      });

    if (dataSort === 'role')
      return await this.usersRepository.find({
        order: {
          role: dataDest,
        },
      });
  }

  async findOne(id: number) {
    return await this.usersRepository.findOne(id);
  }

  async update(id: number, userDto: UserDto) {
    const updateUser = new UserEntity();
    await this.usersRepository.findOne(id);
    updateUser.id = id;
    updateUser.name = userDto.name;
    updateUser.email = userDto.email;
    updateUser.role = userDto.role;
    return await this.usersRepository.save(updateUser);
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}
