import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { BeneficiaireService } from './beneficiaire.service';
import { CreateBeneficiaireDto } from './dto/create-beneficiaire.dto';
import { UpdateBeneficiaireDto } from './dto/update-beneficiaire.dto';
import { Beneficiaire } from './entities/beneficiaire.entity';

@Controller('beneficiaires')
export class BeneficiaireController {
  constructor(private readonly beneficiaireService: BeneficiaireService) {}

  @Post()
  async create(@Body() createBeneficiaireDto: CreateBeneficiaireDto) {
    try {
      return await this.beneficiaireService.create(createBeneficiaireDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBeneficiaireDto: UpdateBeneficiaireDto,
  ) {
    try {
      return await this.beneficiaireService.update(id, updateBeneficiaireDto);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    try {
      return await this.beneficiaireService.delete(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get()
  async findAll(): Promise<Beneficiaire[]> {
    try {
      return await this.beneficiaireService.findAll();
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Beneficiaire> {
    try {
      return await this.beneficiaireService.findOne(id);
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
}
