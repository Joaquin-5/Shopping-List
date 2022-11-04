import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ListSchema, List } from './entities/list.entity';

@Module({
  controllers: [ListsController],
  providers: [ListsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: List.name,
        schema: ListSchema,
      },
    ]),
  ],
})
export class ListsModule {}
