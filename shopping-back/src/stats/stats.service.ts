import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { List } from '../lists/entities/list.entity';

@Injectable()
export class StatsService {
  constructor(
    @InjectModel(List.name)
    private readonly listModel: Model<List>,
  ) {}

  async topCategories() {
    const lists = await this.listModel.find();
    // const itemsCount = await this.listModel.aggregate([
    //   {
    //     $unwind: '$items',
    //   },
    //   {
    //     $group: {
    //       _id: '$items.name',
    //       count: { $sum: 1 },
    //     },
    //   },
    // ]);

    const listWithItemCount = lists.map((list) => {
      const itemCount = list.items.reduce((acc, item) => {
        if (!acc[item.name]) {
          acc[item.name] = 0;
        }
        acc[item.name] += 1;
        return acc;
      }, {});
      return {
        itemCount,
      };
    });

    const itemCount = listWithItemCount.reduce((acc, list) => {
      Object.keys(list.itemCount).forEach((key) => {
        if (!acc[key]) {
          acc[key] = 0;
        }
        acc[key] += list.itemCount[key];
      });
      return acc;
    }, {});

    return {
      categoryCount: itemCount,
    };
  }

  async topItems() {
    const lists = await this.listModel.find();
    const test = lists.map((list) => {
      // eslint-disable-next-line prefer-const
      let testItems = [];
      list.items.map((category) => {
        category.items.map((item) => {
          testItems.push(item.name);
        });
      });
      return testItems.map((item) => {
        return {
          name: item,
          count: testItems.filter((i) => i === item).length,
        };
      });
    });
    const countItems = test.reduce((acc, list) => {
      list.map((item) => {
        if (!acc[item.name]) {
          acc[item.name] = 0;
        }
        acc[item.name] += item.count;
      });
      return acc;
    }, {});
    return { countItems };
  }

  findOne(id: number) {
    return `This action returns a #${id} stat`;
  }
}
