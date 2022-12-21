import { Test, TestingModule } from '@nestjs/testing';
import { FlashcallController } from './flashcall.controller';
import { FlashcallService } from './flashcall.service';

describe('FlashcallController', () => {
  let flashcallController: FlashcallController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [FlashcallController],
      providers: [FlashcallService],
    }).compile();

    flashcallController = app.get<FlashcallController>(FlashcallController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(flashcallController.getHello()).toBe('Hello World!');
    });
  });
});
