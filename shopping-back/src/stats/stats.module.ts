import { Module } from '@nestjs/common';
import { ListsModule } from '../lists/lists.module';
import { StatsController } from './stats.controller';
import { StatsService } from './stats.service';

@Module({
  controllers: [StatsController],
  providers: [StatsService],
  imports: [ListsModule],
})
export class StatsModule {}
