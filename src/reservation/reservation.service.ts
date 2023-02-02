// import { Injectable } from '@nestjs/common';
// import { CreateReservationDto } from './dto/create-reservation.dto';
// import { UpdateReservationDto } from './dto/update-reservatione.dto';

// @Injectable()
// export class ReservationService {
//   findAllByUserId(
//     id: string,
//   ):
//     | import('./entities/reservation.entity').Reservation[]
//     | PromiseLike<import('./entities/reservation.entity').Reservation[]> {
//     throw new Error('Method not implemented.');
//   }
//   findOneByUserId(
//     id: string,
//     id1: number,
//   ):
//     | import('./entities/reservation.entity').Reservation
//     | PromiseLike<import('./entities/reservation.entity').Reservation> {
//     throw new Error('Method not implemented.');
//   }
//   findByUserId(
//     id: string,
//   ):
//     | import('./entities/reservation.entity').Reservation[]
//     | PromiseLike<import('./entities/reservation.entity').Reservation[]> {
//     throw new Error('Method not implemented.');
//   }
//   create(createReservationDto: CreateReservationDto) {
//     return 'This action adds a new reservation';
//   }

//   findAll() {
//     return `This action returns all reservation`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} reservation`;
//   }

//   update(id: number, updateReservationDto: UpdateReservationDto) {
//     return `This action updates a #${id} reservation`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} reservation`;
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { CreateReservationDto } from 'src/reservation/dto/create-reservation.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
  ) {}

  async create(
    createReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const reservation = this.reservationRepository.create(createReservationDto);
    return this.reservationRepository.save(reservation);
  }

  async findAll(): Promise<Reservation[]> {
    return this.reservationRepository.find();
  }

  async findOne(id: string): Promise<Reservation> {
    return this.reservationRepository.findOne({ where: { id } });
  }

  async update(
    id: string,
    updateReservationDto: CreateReservationDto,
  ): Promise<Reservation> {
    const reservation = await this.reservationRepository.findOne({
      where: { id },
    });
    this.reservationRepository.merge(reservation, updateReservationDto);
    return this.reservationRepository.save(reservation);
  }

  async delete(id: string): Promise<void> {
    await this.reservationRepository.delete({ id });
  }
}
