import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './entities/service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  async create(createServiceDto: CreateServiceDto): Promise<Service> {
    const service = new Service();
    service.nomDesServices = createServiceDto.nomDesServices;

    return this.serviceRepository.save(service);
  }

  async update(
    id: string,
    updateServiceDto: UpdateServiceDto,
  ): Promise<Service> {
    try {
      const service = await this.serviceRepository.findOne({ where: { id } });
      if (!service) {
        throw new Error(`Service with id '${id}' not found`);
      }

      service.nomDesServices = updateServiceDto.nomDesServices;

      return this.serviceRepository.save(service);
    } catch (error) {
      throw new Error(
        `Error occured while updating service with id '${id}': ${error.message}`,
      );
    }
  }

  async findById(id: string): Promise<Service> {
    try {
      const service = await this.serviceRepository.findOne({ where: { id } });
      if (!service) {
        throw new Error(`Service with id '${id}' not found`);
      }

      return service;
    } catch (error) {
      throw new Error(
        `Error occured while retrieving service with id '${id}': ${error.message}`,
      );
    }
  }

  async findAll(): Promise<Service[]> {
    try {
      return await this.serviceRepository.find();
    } catch (error) {
      throw new Error(
        `Error occured while retrieving all services: ${error.message}`,
      );
    }
  }

  async delete(id: string): Promise<void> {
    try {
      const service = await this.serviceRepository.findOne({ where: { id } });
      if (!service) {
        throw new Error(`Service with id '${id}' not found`);
      }

      await this.serviceRepository.delete({ id });
    } catch (error) {
      throw new Error(
        `Error occured while deleting service with id '${id}': ${error.message}`,
      );
    }
  }
}
