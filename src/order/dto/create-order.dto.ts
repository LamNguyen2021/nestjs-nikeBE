import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsMongoId } from 'class-validator';

export class CreateOrderDto {
  @IsMongoId()
  @ApiProperty({ type: String })
  idDiscount: string;

  @IsMongoId({ each: true })
  @ApiProperty({ type: [String] })
  listIdDetailProduct: string[];

  @IsDate()
  @ApiProperty({ type: Date })
  dateShip: Date;
}
