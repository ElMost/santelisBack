import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServicesService {
  create(createServiceDto: CreateServiceDto) {
    return 'This action adds a new Service';
  }

  findAll() {
    return `This action returns all Services`;
  }

  findOne(id: number) {
    return `This action returns a #${id} Service`;
  }

  update(id: number, updateServiceDto: UpdateServiceDto) {
    return `This action updates a #${id} Service`;
  }

  remove(id: number) {
    return `This action removes a #${id} Service`;
  }
}
