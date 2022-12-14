import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from 'src/items/entities/item.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,

    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto) {
    createCategoryDto.name = createCategoryDto.name.toLowerCase();
    try {
      const category = await this.categoryModel.create(createCategoryDto);
      return category;
    } catch (error) {
      this.handleException(error);
    }
  }

  async findAll() {
    const Categories = await this.categoryModel.find();
    const itemsByCategory = await this.itemModel.aggregate([
      {
        $group: {
          _id: '$category',
          items: { $push: '$$ROOT' },
        },
      },
    ]);
    return Categories.sort((a, b) => a.name.localeCompare(b.name)).map(
      (category) => {
        const items = itemsByCategory.find(
          (item) => item._id.toString() === category._id.toString(),
        );
        const { _id, name } = category;
        return { _id, name, items: items?.items || [] };
        // return {
        //   ...category.toObject(),
        //   items: items ? items.items : [],
        // };
      },
    );
  }

  async findOne(id: string) {
    try {
      const category = await this.categoryModel.findById(id);
      if (!category) {
        throw new NotFoundException(`No existe la categoría ${id}`);
      }
      // return category with items
      const items = await this.itemModel.find({ category: id });
      const { _id, name } = category;
      return { _id, name, items: items || [] };
    } catch (error) {
      this.handleException(error);
    }
  }

  async findByName(name: string) {
    name = name.toLowerCase();
    try {
      const category = await this.categoryModel.findOne({ name });
      if (!category) {
        throw new NotFoundException(`No existe la categoría ${name}`);
      }
      return category;
    } catch (error) {
      this.handleException(error);
    }
  }

  async update(id: string, updateCategoryDto: UpdateCategoryDto) {
    updateCategoryDto.name = updateCategoryDto.name.toLowerCase().trim();
    try {
      const category = await this.categoryModel.findByIdAndUpdate(
        id,
        updateCategoryDto,
        { new: true },
      );
      if (!category) {
        throw new NotFoundException(`No existe la categoría ${id}`);
      }
      return category;
    } catch (error) {
      this.handleException(error);
    }
  }

  async remove(id: string) {
    try {
      const category = await this.categoryModel.findByIdAndDelete(id);
      if (!category) {
        throw new NotFoundException(`No existe la categoría ${id}`);
      }
      return category;
    } catch (error) {
      this.handleException(error);
    }
  }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new InternalServerErrorException(
        `Ya existe una categoría con el nombre ${error.keyValue.name}`,
      );
    }
    if (error.status === 404) {
      throw new NotFoundException(error.message);
    }
    throw new InternalServerErrorException(error);
  }
}
