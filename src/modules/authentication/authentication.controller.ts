import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthenticationService } from './authentication.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { UserDto } from '../user/dto/user.dto';

@ApiTags('authentication')
@Controller('authentication')
export class AuthenticationController {
  constructor(private authenticationService: AuthenticationService) {}

  @Post('login')
  @ApiOperation({ summary: 'Authenticate a user' })
  @ApiResponse({ status: 200, description: 'User authenticated successful.' })
  @UseGuards(AuthGuard('local'))
  async login(@Req() request: Request) {
    return await this.authenticationService.login(request.user);
  }

  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authenticationService.create(user);
  }
}
