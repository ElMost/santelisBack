import { PartialType } from '@nestjs/mapped-types';
import { CreateBeneficiaireDto } from './create-beneficiaire.dto';

export class UpdateBeneficiaireDto extends PartialType(CreateBeneficiaireDto) {
  nom?: string;
  prenom?: string;
  email?: string;
  password?: string;
}
