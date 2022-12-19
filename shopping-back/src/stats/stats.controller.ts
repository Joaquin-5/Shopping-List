import { Controller, Get, Param } from '@nestjs/common';
import { StatsService } from './stats.service';

@Controller('stats')
export class StatsController {
  constructor(private readonly statsService: StatsService) {}

  // @Get()
  // findAll() {
  //   return this.statsService.findAll();
  // }
  @Get('top-items')
  topItems() {
    return this.statsService.topItems();
  }

  @Get('top-categories')
  topCategories() {
    return this.statsService.topCategories();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.statsService.findOne(+id);
  }
}
