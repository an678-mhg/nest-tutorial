import { Controller, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/sign-up')
  signUp(@Req() req: Request) {
    console.log(req);
    return this.authService.signUp();
  }

  @Post('/sign-in')
  signIn() {
    return this.authService.signIn();
  }
}
