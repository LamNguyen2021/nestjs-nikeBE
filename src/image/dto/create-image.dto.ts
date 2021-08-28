import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsString } from 'class-validator';
import { IsNotBlank } from 'src/custom-validator/is-not-blank.validator';

export class CreateImageDto {
  @IsString()
  @IsNotBlank('urlImage', { message: 'urlImage is not empty' })
  @ApiProperty({ type: String })
  urlImage: string;

  @IsMongoId()
  @ApiProperty({ type: String })
  idShoesDetail: string;
}
