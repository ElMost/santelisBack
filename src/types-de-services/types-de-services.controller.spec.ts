import { Test, TestingModule } from '@nestjs/testing';
import { TypesDeServicesController } from './types-de-services.controller';
import { TypesDeServicesService } from './types-de-services.service';

describe('TypesDeServicesController', () => {
  let controller: TypesDeServicesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypesDeServicesController],
      providers: [TypesDeServicesService],
    }).compile();

    controller = module.get<TypesDeServicesController>(TypesDeServicesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
