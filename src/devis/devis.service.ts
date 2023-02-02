// import { Injectable } from '@nestjs/common';
// import { CreateDevisDto } from './dto/create-devis.dto';
// import { UpdateDevisDto } from './dto/update-devis.dto';

// @Injectable()
// export class DevisService {
//   create(createDevisDto: CreateDevisDto) {
//     return 'This action adds a new devis';
//   }

//   findAll() {
//     return `This action returns all devis`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} devis`;
//   }

//   update(id: number, updateDevisDto: UpdateDevisDto) {
//     return `This action updates a #${id} devis`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} devis`;
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    return this.devisRepository.save(devis);
  }

  async findAll(): Promise<Devis[]> {
    return this.devisRepository.find();
  }

  async findOne(id: string): Promise<Devis> {
    return this.devisRepository.findOne({ where: { id } });
  }

  async update(id: string, updateDevisDto: CreateDevisDto): Promise<Devis> {
    const devis = await this.devisRepository.findOne({ where: { id } });
    this.devisRepository.merge(devis, updateDevisDto);
    return this.devisRepository.save(devis);
  }

  async delete(id: string): Promise<void> {
    await this.devisRepository.delete(id);
  }
}
