import { Inject, Injectable } from '@angular/core';
import { MY_CONFIG_TOKEN } from '../../my-config';

@Injectable()
export class LiteralService {
  constructor(
    @Inject(MY_CONFIG_TOKEN) config: Object
  ) {
    console.log(config);
  }
}
