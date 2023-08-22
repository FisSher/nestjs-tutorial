import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'Hola' };
  }

  signin() {
    return { msg: 'I have signed in ' };
  }
}
