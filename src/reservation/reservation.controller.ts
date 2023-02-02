// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Patch,
//   Param,
//   Delete,
// } from '@nestjs/common';
// import { ReservationService } from './reservation.service';
// import { CreateReservationDto } from './dto/create-reservation.dto';
// // import { UpdateReservationDto } from './dto/update-reservation.dto';

// @Controller('reservation-de-services')
// export class ReservationController {
//   constructor(
//     private readonly reservationDeServicesService: ReservationService,
//   ) {}

//   @Post()
//   create(@Body() createReservationDeServiceDto: CreateReservationDto) {
//     return this.reservationDeServicesService.create(
//       createReservationDeServiceDto,
//     );
//   }

//   @Get()
//   findAll() {
//     return this.reservationDeServicesService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.reservationDeServicesService.findOne(+id);
//   }

//   @Patch(':id')
//   update(
//     @Param('id') id: string,
//     @Body() updateReservationDeServiceDto: CreateReservationDto,
//   ) {
//     return this.reservationDeServicesService.update(
//       +id,
//       updateReservationDeServiceDto,
//     );
//   }

//   @Delete(':id')
//   remove(@Param('id') id: string) {
//     return this.reservationDeServicesService.remove(+id);
//   }
// }

import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { Reservation } from 'src/reservation/entities/reservation.entity';
// import { ReservationService } from 'src/reservation/services/reservation.service';
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
