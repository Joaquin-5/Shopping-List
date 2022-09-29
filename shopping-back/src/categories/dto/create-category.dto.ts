import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3, {
    message: 'La categoría debe tener al menos 3 caracteres',
  })
  name: string;
}
