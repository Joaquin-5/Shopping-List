import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Item } from '../../items/entities/item.entity';

export class List {
  @Prop()
  name: string;

  @Prop()
  items: Item[];

  @Prop()
  status: 'cancelled' | 'completed' | 'pending';

  @Prop()
  createdAt: Date;

  // @Prop()
  // updatedAt: Date;
}

export const ListSchema = SchemaFactory.createForClass(List);
