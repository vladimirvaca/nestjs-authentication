import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { UserService } from './user.service';
import { usersProviders } from './user.provider';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService, ...usersProviders],
  controllers: [UserController],
})
export class UserModule {}
