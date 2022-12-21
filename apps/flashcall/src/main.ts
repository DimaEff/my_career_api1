import { NestFactory } from '@nestjs/core';
import { FlashcallModule } from './flashcall.module';

async function bootstrap() {
  const app = await NestFactory.create(FlashcallModule);
  await app.listen(3000);
}
bootstrap();
