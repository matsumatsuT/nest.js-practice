import { Controller, Post, Get, Body } from '@nestjs/common';
import { FirstTestService } from './first-test.service';
import { TestDto } from './test.dto';

@Controller('first-test')
export class FirstTestController {
  constructor(private firstTestService: FirstTestService) {}

  @Get()
  async findAll(): Promise<TestDto[]> {
    return this.firstTestService.findAll();
  }
  @Post()
  async create(@Body() createDto: TestDto) {
    this.firstTestService.create(createDto);
  }
}
