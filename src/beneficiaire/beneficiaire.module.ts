import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeneficiaireController } from './beneficiaire.controller';
import { BeneficiaireService } from './beneficiaire.service';
import { Beneficiaire } from './entities/beneficiaire.entity';
// import { BeneficiaireController } from './beneficiaire.controller';

// @Module({
//   controllers: [BeneficiaireController],
//   providers: [BeneficiaireService]
// })
// export class BeneficiaireModule {}

@Module({
  imports: [TypeOrmModule.forFeature([Beneficiaire])],
  providers: [BeneficiaireService],
  controllers: [BeneficiaireController],
  exports: [BeneficiaireService],
})
export class BeneficiaireModule {}
