import { Injectable } from '@nestjs/common';
import { CreateReservationDeServiceDto } from './dto/create-reservation-de-service.dto';
import { UpdateReservationDeServiceDto } from './dto/update-reservation-de-service.dto';

@Injectable()
export class ReservationDeServicesService {
  create(createReservationDeServiceDto: CreateReservationDeServiceDto) {
    return 'This action adds a new reservationDeService';
  }

  findAll() {
    return `This action returns all reservationDeServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservationDeService`;
  }

  update(
    id: number,
    updateReservationDeServiceDto: UpdateReservationDeServiceDto,
  ) {
    return `This action updates a #${id} reservationDeService`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservationDeService`;
  }
}
