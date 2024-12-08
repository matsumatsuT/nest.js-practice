import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstTestController } from './first-test/first-test.controller';
import { FirstTestService } from './first-test/first-test.service';
import { FirstTestModule } from './first-test/first-test.module';

@Module({
  controllers: [AppController, FirstTestController],
  providers: [AppService, FirstTestService],
  imports: [FirstTestModule],
})
export class AppModule {}
