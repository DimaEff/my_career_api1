export enum CountryCode {
  RUSSIA = 7,
}

export enum ResponseStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface SuccessResponse {
  status: ResponseStatus.SUCCESS;
  payload?: any;
}

export interface ErrorResponse {
  status: ResponseStatus.ERROR;
  message: string;
}

export type AppResponse = SuccessResponse | ErrorResponse;
