import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';
import { Payload } from './role/payload';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      secretOrKey: jwtConstants.secret, //get secret token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //đưa tiêu chuẩn có bearer
      // ignoreExpiration: false,// nếu token hết hạn sẽ báo
      // secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: Payload) {
    return payload;
  }
}
