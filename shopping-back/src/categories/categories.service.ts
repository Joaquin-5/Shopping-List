import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name)
    private readonly categoryModel: Model<Category>,
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

  findAll() {
    return this.categoryModel.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} category`;
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

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
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
