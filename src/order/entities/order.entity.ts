import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Code } from 'src/code/entities/code.entity';
import { Status } from 'src/status/entities/status.entity';
import { User } from 'src/user/entities/user.entity';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Code' })
  discount: Code;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Status' })
  status: Status;

  @Prop()
  totalPrice: number;

  @Prop()
  subTotalPrice: number;

  @Prop({ default: Date.now })
  dateOrder: Date;

  @Prop()
  dateShip: Date;

  @Prop()
  isPayment: boolean;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
