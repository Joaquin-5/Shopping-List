import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel(Item.name)
    private readonly itemModel: Model<Item>,
  ) {}

  async create(createItemDto: CreateItemDto) {
    createItemDto.name = createItemDto.name.toLowerCase();
    try {
      const item = await this.itemModel.create(createItemDto);
      return item;
    } catch (error) {
      this.handleException(error);
    }
  }

  async findAll() {
    try {
      const items = await this.itemModel.find().populate('category');
      return items;
    } catch (error) {
      this.handleException(error);
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} item`;
  }

  async findByName(name: string) {
    name = name.toLowerCase();
    try {
      const item = await this.itemModel.findOne({ name }).populate('category');
      if (!item) throw new NotFoundException(`No se encontró el item ${name}`);
      return item;
    } catch (error) {
      this.handleException(error);
    }
  }

  update(id: number, updateItemDto: UpdateItemDto) {
    return `This action updates a #${id} item`;
  }

  async remove(id: string) {
    try {
      const item = await this.itemModel.findByIdAndDelete(id);
      if (!item) throw new NotFoundException(`No se encontró el item ${id}`);
      return item;
    } catch (error) {
      this.handleException(error);
    }
  }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new InternalServerErrorException(
        `Ya existe un item con el nombre ${error.keyValue.name}`,
      );
    }
    if (error.status === 404) {
      throw new NotFoundException(error.message);
    }
    throw new InternalServerErrorException(error);
  }
}
