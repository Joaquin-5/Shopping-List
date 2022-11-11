import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Category } from 'src/categories/entities/category.entity';

export class CreateListDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  items: Category[];

  // @IsDate()
  // @IsNotEmpty()
  // updatedAt: Date;
}
