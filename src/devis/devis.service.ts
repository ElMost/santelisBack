import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { Devis } from 'src/devis/entities/devis.entity';
import { CreateDevisDto } from 'src/devis/dto/create-devis.dto';

@Injectable()
export class DevisService {
  constructor(
    @InjectRepository(Devis)
    private devisRepository: Repository<Devis>,
  ) {}

  async create(createDevisDto: CreateDevisDto): Promise<Devis> {
    const devis = this.devisRepository.create(createDevisDto);
    try {
      return this.devisRepository.save(devis);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findAll(): Promise<Devis[]> {
    try {
      return this.devisRepository.find();
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async findOne(id: string): Promise<Devis> {
    try {
      return this.devisRepository.findOne({ where: { id } });
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async update(id: string, updateDevisDto: CreateDevisDto): Promise<Devis> {
    try {
      const devis = await this.devisRepository.findOne({ where: { id } });
      this.devisRepository.merge(devis, updateDevisDto);
      return this.devisRepository.save(devis);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async delete(id: string): Promise<void> {
    try {
      await this.devisRepository.delete(id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
