import { CountryCode } from '@app/common';
import { IsEnum, IsString, Length } from 'class-validator';
import { CODE_LENGTH, PHONE_NUMBER_LENGTH } from '../constants';

export class CallDto {
  @IsEnum(CountryCode)
  countryCode: CountryCode;

  @IsString()
  @Length(PHONE_NUMBER_LENGTH)
  phoneNumber: string;

  @IsString()
  @Length(CODE_LENGTH)
  code: string;
}
