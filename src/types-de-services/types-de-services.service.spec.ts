import { Test, TestingModule } from '@nestjs/testing';
import { TypesDeServicesService } from './types-de-services.service';

describe('TypesDeServicesService', () => {
  let service: TypesDeServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypesDeServicesService],
    }).compile();

    service = module.get<TypesDeServicesService>(TypesDeServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
