import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';
import { Model } from 'mongoose';

@Injectable()
export class ListsService {
  constructor(
    @InjectModel(List.name)
    private listModel: Model<List>,
  ) {}

  async create(createListDto: CreateListDto) {
    try {
      createListDto.name = createListDto.name.toLowerCase().trim();
      const list = await this.listModel.create({
        ...createListDto,
        createdAt: new Date(),
        status: 'pending',
      });
      return list;
    } catch (error) {
      this.handleException(error);
    }
  }

  async findAll() {
    try {
      const lists = await this.listModel.find();
      // Return array lists grouped by date month and year then sorted by date
      const listsByDate = lists.reduce((acc, list) => {
        const date = new Date(list.createdAt);
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const key = `${month}-${year}`;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(list);
        return acc;
      }, {});
      return Object.keys(listsByDate)
        .sort((a, b) => {
          const monthA = parseInt(a.split('-')[0]);
          const yearA = parseInt(a.split('-')[1]);
          const monthB = parseInt(b.split('-')[0]);
          const yearB = parseInt(b.split('-')[1]);
          if (yearA > yearB) return -1;
          if (yearA < yearB) return 1;
          if (monthA > monthB) return -1;
          if (monthA < monthB) return 1;
          return 0;
        })
        .map((key) => {
          return { date: key, lists: listsByDate[key] };
        });
    } catch (error) {
      this.handleException(error);
    }
  }

  async findOne(id: string) {
    try {
      const list = await this.listModel.findById(id);
      if (!list) {
        throw new NotFoundException(`No existe una lista con el id ${id}`);
      }
      return list;
    } catch (error) {
      this.handleException(error);
    }
  }

  async update(id: string, updateListDto: UpdateListDto) {
    updateListDto.name = updateListDto.name.toLowerCase().trim();
    const list = await this.listModel.findById(id);
    if (!list) throw new NotFoundException(`No se encontró la lista ${id}`);
    try {
      const updatedList = await this.listModel.findByIdAndUpdate(
        id,
        updateListDto,
        { new: true },
      );
      return updatedList;
    } catch (error) {
      this.handleException(error);
    }
  }

  async remove(id: string) {
    const list = await this.listModel.findById(id);
    if (!list) throw new NotFoundException(`No se encontró la lista ${id}`);
    try {
      await this.listModel.findByIdAndDelete(id);
      return list;
    } catch (error) {
      this.handleException(error);
    }
  }

  private handleException(error: any) {
    if (error.code === 11000) {
      throw new InternalServerErrorException(
        `Ya existe una lista con el nombre ${error.keyValue.name}`,
      );
    }
    if (error.status === 404) {
      throw new NotFoundException(error.message);
    }
    throw new InternalServerErrorException(error);
  }
}
