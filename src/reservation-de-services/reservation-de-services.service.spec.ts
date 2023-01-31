import { Test, TestingModule } from '@nestjs/testing';
import { ReservationDeServicesService } from './reservation-de-services.service';

describe('ReservationDeServicesService', () => {
  let service: ReservationDeServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationDeServicesService],
    }).compile();

    service = module.get<ReservationDeServicesService>(ReservationDeServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
