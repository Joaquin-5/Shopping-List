import { IsArray, IsDate, IsNotEmpty, IsString } from 'class-validator';
import { Item } from 'src/items/entities/item.entity';

export class CreateListDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  items: Item[];

  // @IsDate()
  // @IsNotEmpty()
  // updatedAt: Date;
}
