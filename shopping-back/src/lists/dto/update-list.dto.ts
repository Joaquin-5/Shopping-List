import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString } from 'class-validator';
import { CreateListDto } from './create-list.dto';

export class UpdateListDto extends PartialType(CreateListDto) {
  @IsString()
  @IsNotEmpty()
  status: 'cancelled' | 'completed' | 'pending';
}
