import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authenticationService: AuthenticationService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    const user = await this.authenticationService.validateUser(
      username,
      password,
    );

    if (!user) {
      throw new UnauthorizedException('Invalid user credentials');
    }
    return user;
  }
}
