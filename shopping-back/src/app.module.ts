import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ListsModule } from './lists/lists.module';
import { StatsModule } from './stats/stats.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    ItemsModule,
    CategoriesModule,
    CommonModule,
    SeedModule,
    ListsModule,
    StatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
