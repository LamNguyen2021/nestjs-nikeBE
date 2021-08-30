import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class UpdateCodeDetailDto {
  @IsMongoId()
  @ApiProperty({
    type: String,
  })
  idStatus: string;
}
