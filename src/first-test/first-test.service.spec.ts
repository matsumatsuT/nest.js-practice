import { Test, TestingModule } from '@nestjs/testing';
import { FirstTestService } from './first-test.service';

describe('FirstTestService', () => {
  let service: FirstTestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirstTestService],
    }).compile();

    service = module.get<FirstTestService>(FirstTestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
