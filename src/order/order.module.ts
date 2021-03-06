import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './entities/order.entity';
import { OrderDetail, OrderDetailSchema } from './entities/orderDetail.entity';
import {
  ProductDetail,
  ProductDetailSchema,
} from 'src/product/entities/product-detail.entity';
import { StatusModule } from 'src/status/status.module';
import { CodeDetailModule } from 'src/code-detail/code-detail.module';
import { Size, SizeSchema } from 'src/size/entities/size.entity';
import { Quantity, QuantitySchema } from 'src/product/entities/quantity.entity';
import { User, UserSchema } from 'src/user/entities/user.entity';
import {
  CodeDetail,
  CodeDetailSchema,
} from 'src/code-detail/entities/code-detail.entity';
import { Code, CodeSchema } from 'src/code/entities/code.entity';
import { Status, StatusSchema } from 'src/status/entities/status.entity';
import {
  Category,
  CategorySchema,
} from 'src/category/entities/category.entity';
import { Role, RoleSchema } from 'src/role/entities/role.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Order.name, schema: OrderSchema },
      { name: OrderDetail.name, schema: OrderDetailSchema },
      { name: ProductDetail.name, schema: ProductDetailSchema },
      { name: Quantity.name, schema: QuantitySchema },
      { name: Size.name, schema: SizeSchema },
      { name: User.name, schema: UserSchema },
      { name: Status.name, schema: StatusSchema },
      { name: Code.name, schema: CodeSchema },
      { name: CodeDetail.name, schema: CodeDetailSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Role.name, schema: RoleSchema },
    ]),
    StatusModule,
    CodeDetailModule,
    OrderModule,
  ],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
