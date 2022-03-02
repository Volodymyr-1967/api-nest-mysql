import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import db_config from './config/db_config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [db_config],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', // process.env.DB_TYPE as DatabaseType,
      host: process.env.DB_HOST,
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [],
      migrations: ['src/migration/**/*.ts'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
