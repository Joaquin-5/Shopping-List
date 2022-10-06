import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Item } from 'src/items/entities/item.entity';

@Schema()
export class Category extends Document {
  @Prop({
    required: true,
    unique: true,
    index: true,
  })
  name: string;

  @Prop()
  items: Item[];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
