import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FirstTestController } from './first-test/first-test.controller';

@Module({
  controllers: [AppController, FirstTestController],
  providers: [AppService],
})
export class AppModule {}
