import { Module } from '@nestjs/common';
import { FlashcallController } from './flashcall.controller';
import { FlashcallService } from './flashcall.service';

@Module({
  imports: [],
  controllers: [FlashcallController],
  providers: [FlashcallService],
})
export class FlashcallModule {}
