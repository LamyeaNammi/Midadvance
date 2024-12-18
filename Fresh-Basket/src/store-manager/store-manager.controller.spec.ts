import { Test, TestingModule } from '@nestjs/testing';
import { StoreManagerController } from './store-manager.controller';

describe('StoreManagerController', () => {
  let controller: StoreManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreManagerController],
    }).compile();

    controller = module.get<StoreManagerController>(StoreManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
