import { IsNotEmpty } from 'class-validator';

export class UpdateServiceDto {
  @IsNotEmpty()
  nomDesServices: string;
}
