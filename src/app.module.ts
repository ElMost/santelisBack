import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { BeneficiaireModule } from './beneficiaire/beneficiaire.module';
// import { ReservationDeServicesModule } from './reservation-de-services/reservation-de-services.module';
// import { TypesDeServicesModule } from './types-de-services/types-de-services.module';
import { DevisModule } from './devis/devis.module';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { Beneficiaire } from './beneficiaire/entities/beneficiaire.entity';
import { Devis } from './devis/entities/devis.entity';
import { Reservation } from './reservation/entities/reservation.entity';
import { ReservationModule } from './reservation/reservation.module';
import { Service } from './service/entities/service.entity';
import { ServicesModule } from './service/services.module';
// import { Devis } from './devis/entities/devi.entity';
// import { ReservationDeServices } from './reservation-de-services/entities/reservation-de-service.entity';
// import { TypeDeService } from './types-de-services/entities/types-de-service.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local',
    }),
    MulterModule.register({ dest: './files' }),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'files') }),
    // TypeOrmModule.forFeature([Image]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Beneficiaire, Reservation, Service, Devis],
      synchronize: process.env.MODE === 'DEV' ? true : false,
    }),
    BeneficiaireModule,
    ReservationModule,
    ServicesModule,
    DevisModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
