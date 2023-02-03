import { IsString, IsEmail, IsAlphanumeric } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  nom?: string;

  @IsString()
  prenom?: string;

  @IsEmail()
  email?: string;

  @IsAlphanumeric()
  password?: string;

  role?: 'admin' | 'user';
}
