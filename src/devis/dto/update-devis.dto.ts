import { IsOptional, IsString } from 'class-validator';

export class UpdateDevisDto {
  @IsString()
  @IsOptional()
  nomDesServices?: string;

  @IsString()
  @IsOptional()
  frequence?: string;
}
