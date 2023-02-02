// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { BeneficiaireController } from './beneficiaire.controller';
// import { BeneficiaireService } from './beneficiaire.service';
// import { Beneficiaire } from './entities/beneficiaire.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([Beneficiaire])],
//   providers: [BeneficiaireService],
//   controllers: [BeneficiaireController],
//   exports: [BeneficiaireService],
// })
// export class BeneficiaireModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeneficiaireService } from './beneficiaire.service';
import { BeneficiaireController } from './beneficiaire.controller';
import { Beneficiaire } from './entities/beneficiaire.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Beneficiaire])],
  providers: [BeneficiaireService],
  controllers: [BeneficiaireController],
})
export class BeneficiaireModule {}
