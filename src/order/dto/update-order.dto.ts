import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class UpdateOrderDto {
  @IsMongoId()
  @ApiProperty({
    type: String,
  })
  idStatus: string;
}
