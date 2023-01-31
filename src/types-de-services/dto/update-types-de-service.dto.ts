import { PartialType } from '@nestjs/mapped-types';
import { CreateTypesDeServiceDto } from './create-types-de-service.dto';

export class UpdateTypesDeServiceDto extends PartialType(CreateTypesDeServiceDto) {}
