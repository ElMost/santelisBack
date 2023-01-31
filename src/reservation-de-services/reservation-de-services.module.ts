import { Module } from '@nestjs/common';
import { ReservationDeServicesService } from './reservation-de-services.service';
import { ReservationDeServicesController } from './reservation-de-services.controller';

@Module({
  controllers: [ReservationDeServicesController],
  providers: [ReservationDeServicesService]
})
export class ReservationDeServicesModule {}
