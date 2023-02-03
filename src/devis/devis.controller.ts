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
    try {
      return await this.devisService.findAll();
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenue lors de la récupération de la liste des devis.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      const devis = await this.devisService.findOne(id);
      if (!devis) {
        throw new HttpException(
          "Le devis demandé n'existe pas.",
          HttpStatus.NOT_FOUND,
        );
      }
      return devis;
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenue lors de la récupération du devis.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  async create(@Body() createDevisDto: CreateDevisDto) {
    try {
      return await this.devisService.create(createDevisDto);
    } catch (error) {
      throw new HttpException(
        "Une erreur est survenue lors de la création d'un nouveau devis.",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDevisDto: CreateDevisDto,
  ) {
    try {
      const devis = await this.devisService.findOne(id);
      if (!devis) {
        throw new HttpException(
          "Le devis à mettre à jour n'existe pas.",
          HttpStatus.NOT_FOUND,
        );
      }
      return await this.devisService.update(id, updateDevisDto);
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenue lors de la mise à jour du devis.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      const devis = await this.devisService.findOne(id);
      if (!devis) {
        throw new HttpException(
          "Le devis à supprimer n'existe pas.",
          HttpStatus.NOT_FOUND,
        );
      }
      return await this.devisService.delete(id);
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenue lors de la suppression du devis.',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
