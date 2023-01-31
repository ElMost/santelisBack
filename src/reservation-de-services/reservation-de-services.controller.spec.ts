import { Test, TestingModule } from '@nestjs/testing';
import { ReservationDeServicesController } from './reservation-de-services.controller';
import { ReservationDeServicesService } from './reservation-de-services.service';

describe('ReservationDeServicesController', () => {
  let controller: ReservationDeServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationDeServicesController],
      providers: [ReservationDeServicesService],
    }).compile();

    controller = module.get<ReservationDeServicesController>(ReservationDeServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
