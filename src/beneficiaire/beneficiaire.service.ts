import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Devis } from 'src/devis/entities/devis.entity';
import { Reservation } from 'src/reservation/entities/reservation.entity';
import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Beneficiaire } from './entities/beneficiaire.entity';

@Injectable()
export class BeneficiaireService {
  beneficiaireRepository: any;
  constructor(
    @InjectRepository(Beneficiaire)
    private readonly beneficritpionRepository: Repository<Beneficiaire>,
  ) {}

  async create(
    createBeneficiaireDto: CreateBeneficiaireDto,
  ): Promise<Beneficiaire> {
    const beneficiaire = plainToClass(Beneficiaire, createBeneficiaireDto);
    const errors = await validate(beneficiaire);
    if (errors.length > 0) {
      throw new Error(`Validation failed. Errors: ${errors}`);
    }
    return this.beneficiaireRepository.save(beneficiaire);
  }

  async update(
    id: string,
    updateBeneficiaireDto: UpdateBeneficiaireDto,
  ): Promise<Beneficiaire> {
    const beneficiaire = await this.beneficiaireRepository.findOne(id);
    if (!beneficiaire) {
      throw new Error(`Beneficiaire with ID "${id}" not found.`);
    }
    Object.assign(beneficiaire, updateBeneficiaireDto);
    const errors = await validate(beneficiaire);
    if (errors.length > 0) {
      throw new Error(`Validation failed. Errors: ${errors}`);
    }
    return this.beneficiaireRepository.save(beneficiaire);
  }

  async delete(id: string): Promise<void> {
    const beneficiaire = await this.beneficiaireRepository.findOne(id);
    if (!beneficiaire) {
      throw new Error(`Beneficiaire with ID "${id}" not found.`);
    }
    this.beneficiaireRepository.delete(id);
  }

  async findAll(): Promise<Beneficiaire[]> {
    return this.beneficiaireRepository.find();
  }

  async findOne(id: string): Promise<Beneficiaire> {
    const beneficiaire = await this.beneficiaireRepository.findOne(id);
    if (!beneficiaire) {
      throw new Error(`Beneficiaire with ID "${id}" not found.`);
    }
    return beneficiaire;
  }
}
