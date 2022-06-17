import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: 'api-nest-mysql: API + MySQL + Docker',
    };
  }
}
