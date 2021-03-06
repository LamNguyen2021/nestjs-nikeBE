import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { IdProductDto } from './dto/id-product.dto';
import { ProductDetail } from './entities/product-detail.entity';
import { IdProductDetailDto } from './dto/id-product-detail.dto';
import { ProductFilterDto } from './dto/product-filter.dto';
import { CreateUpdateProductDetailDto } from './dto/create-update-product-detail.dto';
import { ProductDetailResponse } from './response/product-detail';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('filter')
  filter(@Query() filter: ProductFilterDto) {
    return this.productService.findWithFilter(filter);
  }

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Created successfully product',
    type: Product,
  })
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.createProduct(createProductDto);
  }

  @Post(':id/productDetail')
  @ApiResponse({
    status: 201,
    description: 'Insert product detail',
    type: ProductDetail,
  })
  insertProductDetail(
    @Param() idProductDto: IdProductDto,
    @Body() createProductDetailDto: CreateUpdateProductDetailDto,
  ): Promise<ProductDetailResponse> {
    return this.productService.insertDetail(
      idProductDto.id,
      createProductDetailDto,
    );
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all Product',
    type: [Product],
  })
  getAllProduct(): Promise<Product[]> {
    return this.productService.getAllProduct();
  }

  @Get(':id/productDetail')
  @ApiResponse({
    status: 200,
    description: 'get all product detail for id product',
    type: [ProductDetail],
  })
  getAllProductDetail(
    @Param() idProductDto: IdProductDto,
  ): Promise<ProductDetailResponse[]> {
    return this.productService.getAllProductDetail(idProductDto.id);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get a product for id',
    type: Product,
  })
  getProduct(@Param() idProductDto: IdProductDto): Promise<Product> {
    return this.productService.findOne(idProductDto.id);
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'Update a product for id',
    type: Product,
  })
  updateProduct(
    @Param() idProoductDto: IdProductDto,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(
      idProoductDto.id,
      updateProductDto,
    );
  }

  @Patch('productDetail/:id')
  @ApiResponse({
    status: 200,
    description: 'Update a product detail for id productDetail',
    type: ProductDetail,
  })
  updateProductDetail(
    @Param() idProductDetailDto: IdProductDetailDto,
    @Body() updateProductDetailDto: CreateUpdateProductDetailDto,
  ): Promise<ProductDetailResponse> {
    return this.productService.updateProductDetail(
      idProductDetailDto.id,
      updateProductDetailDto,
    );
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Delete a product for id Product',
    type: String,
  })
  deleteProduct(@Param() idProductDto: IdProductDto): Promise<string> {
    return this.productService.deleteProduct(idProductDto.id);
  }

  @Delete('productDetail/:id')
  @ApiResponse({
    status: 200,
    description: 'Delete a product detail for id ProductDetail',
    type: String,
  })
  deleteProductDetail(
    @Param() idProductDetailDto: IdProductDetailDto,
  ): Promise<string> {
    return this.productService.deleteProductDetail(idProductDetailDto.id);
  }
}
