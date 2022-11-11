import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Category } from 'src/categories/entities/category.entity';

@Schema()
export class List {
  @Prop()
  name: string;

  @Prop()
  items: Category[];

  @Prop()
  status: 'cancelled' | 'completed' | 'pending';

  @Prop()
  createdAt: Date;

  // @Prop()
  // updatedAt: Date;
}

export const ListSchema = SchemaFactory.createForClass(List);
