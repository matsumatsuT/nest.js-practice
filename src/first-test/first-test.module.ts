import { Module } from '@nestjs/common';
import { FirstTestController } from './first-test.controller';
import { FirstTestService } from './first-test.service';

@Module({})
export class FirstTestModule {
  controllers = [FirstTestController];
  providers = [FirstTestService];
}
