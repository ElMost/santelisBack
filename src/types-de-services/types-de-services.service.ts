import { Injectable } from '@nestjs/common';
import { CreateTypesDeServiceDto } from './dto/create-types-de-service.dto';
import { UpdateTypesDeServiceDto } from './dto/update-types-de-service.dto';

@Injectable()
export class TypesDeServicesService {
  create(createTypesDeServiceDto: CreateTypesDeServiceDto) {
    return 'This action adds a new typesDeService';
  }

  findAll() {
    return `This action returns all typesDeServices`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typesDeService`;
  }

  update(id: number, updateTypesDeServiceDto: UpdateTypesDeServiceDto) {
    return `This action updates a #${id} typesDeService`;
  }

  remove(id: number) {
    return `This action removes a #${id} typesDeService`;
  }
}
