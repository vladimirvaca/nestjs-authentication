import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello ironvlack!';
  }
  getHelloWorld(): string {
    return 'Hello world!';
  }
}
