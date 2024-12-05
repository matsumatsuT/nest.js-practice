import { Test, TestingModule } from '@nestjs/testing';
import { FirstTestController } from './first-test.controller';

describe('FirstTestController', () => {
  let controller: FirstTestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FirstTestController],
    }).compile();

    controller = module.get<FirstTestController>(FirstTestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
