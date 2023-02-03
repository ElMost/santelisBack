import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  delete(id: string): void | PromiseLike<void> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const { nom, prenom, email, password, role } = createUserDto;
    const user = new User();
    user.nom = nom;
    user.prenom = prenom;
    user.email = email;
    user.password = await hash(password, 10);
    user.role = role;

    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new Error(`User with ID "${id}" not found`);
    }

    if (updateUserDto.nom) {
      user.nom = updateUserDto.nom;
    }

    if (updateUserDto.prenom) {
      user.prenom = updateUserDto.prenom;
    }

    if (updateUserDto.email) {
      user.email = updateUserDto.email;
    }

    if (updateUserDto.password) {
      user.password = await hash(updateUserDto.password, 10);
    }

    if (updateUserDto.role) {
      user.role = updateUserDto.role;
    }

    await this.userRepository.save(user);
  }

  async findById(id: string): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async authenticate(
    email: string,
    password: string,
  ): Promise<{ user: User; accessToken: string }> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new Error(`User with email "${email}" not found`);
    }

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error(`Invalid password for user with email "${email}"`);
    }

    const accessToken = sign({ userId: user.id }, 'secretKey', {
      expiresIn: '1h',
    });

    return { user, accessToken };
  }
}
