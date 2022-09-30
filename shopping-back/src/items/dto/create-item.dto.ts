import { IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateItemDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  note: string;

  @IsOptional()
  @IsString()
  image?: string;
}
