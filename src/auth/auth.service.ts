import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Payload } from './role/payload';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<User> {
    const user = await this.usersService.findUserByEmail(email);

    if (user && (await bcrypt.compare(pass, user.password))) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload: Payload = {
      username: user.username,
      userId: user._id,
      roleName: user.role.nameRole || '',
    };

    const info = {
      id: user._id,
      username: user.username,
      role: user.role.nameRole,
    };

    // phải có roleName vì trong roles-guard.ts sẽ so sánh role trong token với role trong BE qui định (SetMetadata('roles', ['Admin']))
    return {
      statusCode: HttpStatus.OK,
      info,
      access_token: this.jwtService.sign(payload),
      message: 'login successfully',
    };
  }
}
