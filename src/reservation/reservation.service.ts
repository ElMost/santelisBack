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
