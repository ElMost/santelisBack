import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDeServiceDto } from './create-reservation-de-service.dto';

export class UpdateReservationDeServiceDto extends PartialType(CreateReservationDeServiceDto) {}
