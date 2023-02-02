// import { PartialType } from '@nestjs/mapped-types';
// import { CreateDevisDto } from './create-devis.dto';

// import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString } from 'class-validator';
// import { CreateDevisDto } from './create-devis.dto';

// export class UpdateDevisDto extends PartialType(CreateDevisDto) {
export class UpdateDevisDto {
  @IsString()
  @IsOptional()
  nomDesServices?: string;

  @IsString()
  @IsOptional()
  frequence?: string;
}
