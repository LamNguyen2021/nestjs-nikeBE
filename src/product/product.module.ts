import { forwardRef, Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { StatusModule } from 'src/status/status.module';
import {
  Category,
  CategorySchema,
} from 'src/category/entities/category.entity';
import { Status, StatusSchema } from 'src/status/entities/status.entity';
import { Color, ColorSchema } from 'src/color/entities/color.entity';
import { Gender, GenderSchema } from 'src/gender/entities/gender.entity';
import {
  ProductDetail,
  ProductDetailSchema,
} from './entities/product-detail.entity';
import { Size, SizeSchema } from 'src/size/entities/size.entity';
import { Image, ImageSchema } from 'src/image/entities/image.entity';
import { ImageService } from 'src/image/image.service';
import { Quantity, QuantitySchema } from './entities/quantity.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductDetail.name, schema: ProductDetailSchema },
      { name: Category.name, schema: CategorySchema },
      { name: Status.name, schema: StatusSchema },
      { name: Color.name, schema: ColorSchema },
      { name: Gender.name, schema: GenderSchema },
      { name: Size.name, schema: SizeSchema },
      { name: Image.name, schema: ImageSchema },
      { name: Quantity.name, schema: QuantitySchema },
    ]),
    forwardRef(() => StatusModule),
  ],
  controllers: [ProductController],
  providers: [ProductService, ImageService],
  exports: [ProductService],
})
export class ProductModule {}
