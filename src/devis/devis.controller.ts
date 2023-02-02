import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { DevisService } from './devis.service';
import { CreateDevisDto } from './dto/create-devis.dto';

@Controller('devis')
export class DevisController {
  constructor(private readonly devisService: DevisService) {}

  @Get()
  async findAll() {
    return this.devisService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const devis = await this.devisService.findOne(id);
    if (!devis) {
      throw new HttpException(
        "Le devis demandé n'existe pas.",
        HttpStatus.NOT_FOUND,
      );
    }
    return devis;
  }

  @Post()
  async create(@Body() createDevisDto: CreateDevisDto) {
    return this.devisService.create(createDevisDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDevisDto: CreateDevisDto,
  ) {
    const devis = await this.devisService.findOne(id);
    if (!devis) {
      throw new HttpException(
        "Le devis à mettre à jour n'existe pas.",
        HttpStatus.NOT_FOUND,
      );
    }
    return this.devisService.update(id, updateDevisDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const devis = await this.devisService.findOne(id);
    if (!devis) {
      throw new HttpException(
        "Le devis à supprimer n'existe pas.",
        HttpStatus.NOT_FOUND,
      );
    }
    return this.devisService.delete(id);
  }
}
