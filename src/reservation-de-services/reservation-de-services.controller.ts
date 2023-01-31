import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationDeServicesService } from './reservation-de-services.service';
import { CreateReservationDeServiceDto } from './dto/create-reservation-de-service.dto';
import { UpdateReservationDeServiceDto } from './dto/update-reservation-de-service.dto';

@Controller('reservation-de-services')
export class ReservationDeServicesController {
  constructor(private readonly reservationDeServicesService: ReservationDeServicesService) {}

  @Post()
  create(@Body() createReservationDeServiceDto: CreateReservationDeServiceDto) {
    return this.reservationDeServicesService.create(createReservationDeServiceDto);
  }

  @Get()
  findAll() {
    return this.reservationDeServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationDeServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDeServiceDto: UpdateReservationDeServiceDto) {
    return this.reservationDeServicesService.update(+id, updateReservationDeServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationDeServicesService.remove(+id);
  }
}
