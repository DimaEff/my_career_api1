import { Injectable } from '@nestjs/common';

@Injectable()
export class FlashcallService {
  getHello(): string {
    return 'Hello World!';
  }
}
