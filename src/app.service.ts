import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, Welcome!, https://api-nezuela.onrender.com/docs';
  }
}
