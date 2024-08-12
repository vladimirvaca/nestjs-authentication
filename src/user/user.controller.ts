import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  getAll(): string {
    return 'All users signed in application';
  }
}
