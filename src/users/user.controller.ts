import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { ListQueryDto } from './dto/list-query.dto';

@ApiBearerAuth()
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly usersService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({
    status: 201,
    description: 'Created new User',
    type: UserEntity,
  })
  @ApiResponse({
    status: 409,
    description: 'Error: Conflict',
  })
  async create(@Body() userDto: UserDto) {
    return await this.usersService.create(userDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({
    status: 200,
    description: 'The found all records',
    type: [UserEntity],
  })
  async findAll(@Query() query: ListQueryDto) {
    return await this.usersService.findAll(query.dest, query.sort);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({
    status: 200,
    description: 'The user has been found',
    type: UserEntity,
  })
  async findOne(@Param('id') id: string) {
    return await this.usersService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Patch user by id' })
  @ApiResponse({
    status: 200,
    description: 'The user has been updated successfully',
    type: UserEntity,
  })
  async update(@Param('id') id: string, @Body() userDto: UserDto) {
    return await this.usersService.update(+id, userDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.usersService.remove(+id);
  }
}
