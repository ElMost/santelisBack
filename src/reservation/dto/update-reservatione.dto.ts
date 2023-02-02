import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class UpdateReservationDto {
  @IsString()
  nomDesServices: string;

  @IsDate()
  date: Date;

  @IsString()
  heure: string;

  @IsNotEmpty()
  desciaireId: string;
}
