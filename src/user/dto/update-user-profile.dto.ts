import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt } from 'class-validator';
import { IsNotBlank } from 'src/custom-validator/is-not-blank.validator';

export class UpdateUserProfileDto {
  @IsNotBlank('name', { message: 'name can not empty' })
  @ApiProperty({ type: String })
  name: string;

  @IsInt()
  @ApiProperty({ type: Number })
  yearOfBirth: number;

  @ApiProperty({ type: String })
  address: string;
}
