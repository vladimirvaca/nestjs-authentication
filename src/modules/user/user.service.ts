import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './model/user.model';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) {}

  async create(userDto: UserDto): Promise<User> {
    return await this.userRepository.create<User>(userDto as any);
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  findOneById(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne<User>({ where: { email } });
  }

  async remove(id: string): Promise<void> {
    const user = await this.findOneById(id);
    await user.destroy();
  }
}
