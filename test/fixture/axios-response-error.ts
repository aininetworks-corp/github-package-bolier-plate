import { HttpStatus } from '@nestjs/common';
import { AxiosError } from 'axios';

import { AxiosResponseFixture } from './axios-response';

export class AxiosResponseErrorFixture<T> extends AxiosError<T> {
  constructor(data: T, status: HttpStatus) {
    super();

    this.response = new AxiosResponseFixture(data, status);
  }
}
