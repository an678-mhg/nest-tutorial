import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signIn() {
    return {
      msg: 'signIn',
    };
  }

  signUp() {
    return {
      msg: 'signUp',
    };
  }
}
