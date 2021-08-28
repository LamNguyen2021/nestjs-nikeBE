import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';
import { IsNotBlank } from 'src/custom-validator/is-not-blank.validator';

export class CreateCodeDto {
  @IsString()
  @IsNotBlank('codeName', { message: 'codeName empty' })
  @ApiProperty({ type: String })
  codeName: string;

  @IsNumber()
  @ApiProperty({ type: Number, default: 10 })
  codeValue: number;
}
