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
      email: createUserDto.email,
    });
    if (existEmail)
      throw new HttpException(
        `Email ${createUserDto.email} already exists`,
        HttpStatus.CONFLICT,
      );

    const newUser = new UserEntity();
    newUser.name = createUserDto.name;
    newUser.email = createUserDto.email;
    newUser.role = createUserDto.role;
    newUser.updated = new Date();
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

  async update(id: number, updateUserDto: UpdateUserDto) {
    const updateUser = new UserEntity();
    updateUser.id = id;
    updateUser.name = updateUserDto.name;
    updateUser.email = updateUserDto.email;
    updateUser.role = updateUserDto.role;
    return await this.usersRepository.save(updateUser);
  }

  async remove(id: number) {
    return await this.usersRepository.delete(id);
  }
}
