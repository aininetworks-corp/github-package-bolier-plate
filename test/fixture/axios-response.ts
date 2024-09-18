import { HttpStatus } from '@nestjs/common';
import { AxiosHeaderValue, AxiosResponse, AxiosResponseHeaders, InternalAxiosRequestConfig, RawAxiosRequestHeaders } from 'axios';

export class AxiosResponseFixture<T> implements AxiosResponse<T, any> {
  request?: any;
  data: T;
  status: number;
  statusText: string;
  headers:
    | AxiosResponseHeaders
    | Partial<
        RawAxiosRequestHeaders & {
          Server: AxiosHeaderValue;
          'Content-Type': AxiosHeaderValue;
          'Content-Length': AxiosHeaderValue;
          'Cache-Control': AxiosHeaderValue;
          'Content-Encoding': AxiosHeaderValue;
        } & { 'set-cookie': string[] }
      >;
  config: InternalAxiosRequestConfig<any>;

  constructor(data: T, status: HttpStatus) {
    this.data = data;
    this.status = status;
  }
}
