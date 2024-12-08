import { Injectable } from '@nestjs/common';
import { TestDto } from './test.dto';

@Injectable()
export class FirstTestService {
  private readonly users: TestDto[] = [];
  create(createDto: TestDto) {
    this.users.push(createDto);
  }
  findAll() {
    return this.users;
  }
}
