import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Category } from 'src/categories/entities/category.entity';
import { Item } from 'src/items/entities/item.entity';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
  ) {}

  private async deleteAll() {
    await this.categoryModel.deleteMany({});
    await this.itemModel.deleteMany({});
  }

  private async createCategories() {
    const categories = await this.categoryModel.create(initialData.categories);
    return categories;
  }

  private async createItems(categories) {
    const items = await this.itemModel.create(
      initialData.items.map((item) => ({
        ...item,
        category: categories.find(
          (category) => category.name === item.category,
        ),
      })),
    );
    return items;
  }

  async seed() {
    try {
      await this.deleteAll();
      const categories = await this.createCategories();
      await this.createItems(categories);
      return 'Seed executed successfully';
    } catch (error) {
      console.error(error);
    }
  }
}
