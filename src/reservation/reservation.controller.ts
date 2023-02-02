import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { CreateReservationDto } from 'src/reservation/dto/create-reservation.dto';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private reservationService: ReservationService) {}

  @Get()
  async findAll(): Promise<Reservation[]> {
    return this.reservationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Reservation> {
    return this.reservationService.findOne(id);
  }

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto) {
    return this.reservationService.create(createReservationDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.reservationService.delete(id);
  }
}
