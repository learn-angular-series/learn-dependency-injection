import { Inject } from '@angular/core';
import { MY_CONFIG_TOKEN } from '../../my-config';

export class LiteralService {
  constructor(
    @Inject(MY_CONFIG_TOKEN) config:Object
  ) {
    console.log(config);
  }
}
