import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsMongoId } from 'class-validator';

export class DetailProduct {
  @ApiProperty({ type: String })
  idProduct: string;

  @ApiProperty({ type: Number })
  quantity: number;
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
