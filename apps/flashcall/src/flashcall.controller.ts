import { Body, Controller, Post } from '@nestjs/common';
import { FlashcallService } from './flashcall.service';
import { CallDto } from './dto/call.dto';
import { AppResponse } from '@app/common';

@Controller()
export class FlashcallController {
  constructor(private readonly flashcallService: FlashcallService) {}

  @Post()
  async getHello(@Body() call: CallDto): Promise<AppResponse> {
    return this.flashcallService.call(call);
  }
}
