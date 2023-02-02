import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Devis } from './entities/devis.entity';
import { DevisService } from './devis.service';
import { DevisController } from './devis.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Devis])],
  providers: [DevisService],
  controllers: [DevisController],
  exports: [DevisService],
})
export class DevisModule {}
