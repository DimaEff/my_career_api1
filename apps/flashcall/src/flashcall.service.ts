import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { CallDto } from './dto/call.dto';
import { AppResponse, ResponseStatus } from '@app/common';
import { firstValueFrom } from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { SMS_AERO_BASE_URL } from './constants';

@Injectable()
export class FlashcallService {
  private readonly AERO_EMAIL: string;
  private readonly AERO_API_KEY: string;

  constructor(
    private readonly HttpService: HttpService,
    private configService: ConfigService,
  ) {
    this.AERO_EMAIL = this.configService.get<string>('AERO_EMAIL');
    this.AERO_API_KEY = this.configService.get<string>('AERO_API_KEY');
  }

  private readonly logger = new Logger(FlashcallService.name);

  public async call(call: CallDto): Promise<AppResponse> {
    const fullPhoneNumber = `${call.countryCode}-${call.phoneNumber}`;
    this.logger.log(`Call started on number: ${fullPhoneNumber}`);

    try {
      await this.fetchCall(call);

      this.logger.log(`Success call: ${fullPhoneNumber}`);

      return { status: ResponseStatus.SUCCESS };
    } catch (e) {
      console.log(e);
      this.logger.error(`Some calling error. Number: ${fullPhoneNumber}`);

      return {
        status: ResponseStatus.ERROR,
        message: e.message,
      };
    }
  }

  private async fetchCall(call: CallDto) {
    const authBase64 = btoa(`${this.AERO_EMAIL}:${this.AERO_API_KEY}`);
    return await firstValueFrom(
      this.HttpService.get(`${SMS_AERO_BASE_URL}/flashcall/send`, {
        headers: {
          // Authorization: `Basic ZG1pdHJ5LmZvbWluZW5rb3ZAZ21haWwuY29tOkw5YXJlc2w1N3B1ZTFPM1RIa1VsTVhxeXlpVVY=`,
          Authorization: `Basic ${authBase64}`,
        },
        params: {
          phone: `${call.countryCode}${call.phoneNumber}`,
          code: call.code,
        },
      }),
    );
  }
}
