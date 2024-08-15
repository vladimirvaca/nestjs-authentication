import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export class UserDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly lastname: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @IsNotEmpty()
  @IsEnum(Role, {
    message: 'Role must be either ADMIN or USER',
  })
  readonly role: Role;
}
