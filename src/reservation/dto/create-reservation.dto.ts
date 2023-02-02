import { IsNotEmpty, IsString, IsDate } from 'class-validator';

export class CreateReservationDto {
  @IsNotEmpty()
  @IsString()
  nomDesServices: string;

  @IsNotEmpty()
  @IsDate()
  date: Date;

  @IsNotEmpty()
  @IsString()
  heure: string;

  @IsNotEmpty()
  beneficiaireId: string;
}
