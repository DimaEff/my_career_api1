import { Module } from '@nestjs/common';
import { FlashcallController } from './flashcall.controller';
import { FlashcallService } from './flashcall.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/flashcall/.env',
      validationSchema: Joi.object({
        AERO_EMAIL: Joi.string().required(),
        AERO_API_KEY: Joi.string().required(),
      }),
    }),
    HttpModule,
  ],
  controllers: [FlashcallController],
  providers: [FlashcallService],
})
export class FlashcallModule {}
