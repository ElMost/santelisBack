// import { Module } from '@nestjs/common';
// import { ReservationService } from './reservation.service';
// import { ReservationController } from './reservation.controller';

// @Module({
//   controllers: [ReservationController],
//   providers: [ReservationService],
// })
// export class ReservationModule {}

import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reservation])],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
