import { Controller, Get } from '@nestjs/common';
import { FlashcallService } from './flashcall.service';

@Controller()
export class FlashcallController {
  constructor(private readonly flashcallService: FlashcallService) {}

  @Get()
  getHello(): string {
    return this.flashcallService.getHello();
  }
}
