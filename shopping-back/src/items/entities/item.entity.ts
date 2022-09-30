import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Category } from '../../categories/entities/category.entity';

// User story: I can add a new item with name, category, note, and image.
@Schema()
export class Item extends Document {
  @Prop({
    required: true,
    unique: true,
  })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: Category.name,
  })
  category: Category;

  @Prop({
    required: false,
    default: '',
  })
  note: string;

  @Prop({
    required: false,
    default: null,
  })
  image: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
