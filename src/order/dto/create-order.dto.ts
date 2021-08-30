import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class DetailProduct {
  @ApiProperty({ type: String })
  idDetailProduct: string;

  @ApiProperty({ type: Number })
  quantity: number;

  @IsMongoId()
  @ApiProperty({ type: String })
  sizeId: string;
}

export class CreateOrderDto {
  @IsMongoId()
  @ApiProperty({ type: String })
  idDiscount: string;

  @ApiProperty({ type: [DetailProduct] })
  listDetailProduct: DetailProduct[];

  // @IsDate()
  @ApiProperty({ type: Date })
  dateShip: Date;
}
