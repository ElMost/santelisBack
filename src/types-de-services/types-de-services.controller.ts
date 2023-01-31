import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesDeServicesService } from './types-de-services.service';
import { CreateTypesDeServiceDto } from './dto/create-types-de-service.dto';
import { UpdateTypesDeServiceDto } from './dto/update-types-de-service.dto';

@Controller('types-de-services')
export class TypesDeServicesController {
  constructor(private readonly typesDeServicesService: TypesDeServicesService) {}

  @Post()
  create(@Body() createTypesDeServiceDto: CreateTypesDeServiceDto) {
    return this.typesDeServicesService.create(createTypesDeServiceDto);
  }

  @Get()
  findAll() {
    return this.typesDeServicesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesDeServicesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypesDeServiceDto: UpdateTypesDeServiceDto) {
    return this.typesDeServicesService.update(+id, updateTypesDeServiceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesDeServicesService.remove(+id);
  }
}
