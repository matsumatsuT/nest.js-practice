import { Controller, Post, Get, Param, Body, Put } from '@nestjs/common';
import { TestDto } from './test.dto';

@Controller('first-test')
export class FirstTestController {
  @Post()
  create(): string {
    return 'create action';
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateDto: TestDto) {
    return `update action: ${updateDto.name} : ${id}`;
  }

  @Get()
  findAll(): string {
    return 'findAll action';
  }

  @Get(':id')
  findOne(@Param('id') id: string): string {
    return `findOne action: ${id}`;
  }
}
