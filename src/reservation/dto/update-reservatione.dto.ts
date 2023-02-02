// import { PartialType } from '@nestjs/mapped-types';
// import { CreateReservationDto } from './create-reservation.dto';

import { IsDate, IsNotEmpty, IsString } from 'class-validator';

// export class UpdateReservationDto extends PartialType(CreateReservationDto) {}

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
