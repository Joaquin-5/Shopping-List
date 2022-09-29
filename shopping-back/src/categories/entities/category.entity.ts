import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Category {
  @Prop({
    required: true,
    unique: true,
    index: true,
  })
  name: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
