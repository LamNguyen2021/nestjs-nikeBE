import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Order } from './order.entity';

export type OrderDetailDocument = OrderDetail & Document;

@Schema()
export class OrderDetail {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Order' })
  order: Order;

  @Prop()
  nameProduct: string;

  @Prop()
  price: number;

  @Prop()
  categoryName: string;

  @Prop()
  color: string;
}

export const OrderDetailSchema = SchemaFactory.createForClass(OrderDetail);
