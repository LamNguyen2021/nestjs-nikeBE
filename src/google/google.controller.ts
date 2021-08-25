import { Controller, Get, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GoogleService } from './google.service';

@ApiTags('Google')
@Controller('google')
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get(':tokenId')
  @ApiResponse({
    status: 200,
    description: 'login with google by sending tokenId',
  })
  checkTokenId(@Param('tokenId') tokenId: string) {
    this.googleService.googleLogin(tokenId);
  }
}
