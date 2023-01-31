import { Module } from '@nestjs/common';
import { TypesDeServicesService } from './types-de-services.service';
import { TypesDeServicesController } from './types-de-services.controller';

@Module({
  controllers: [TypesDeServicesController],
  providers: [TypesDeServicesService]
})
export class TypesDeServicesModule {}
