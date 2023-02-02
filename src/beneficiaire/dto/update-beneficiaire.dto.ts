import { IsNotEmpty, IsString, IsEmail, IsAlphanumeric } from 'class-validator';

export class UpdateBeneficiaireDto {
  @IsNotEmpty()
  @IsString()
  nom: string;

  @IsNotEmpty()
  @IsString()
  prenom: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsAlphanumeric()
  password: string;
}
