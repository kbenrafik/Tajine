import { Injectable } from '@angular/core';

@Injectable()
export class PriceUtilsService {

  constructor() { }

  static reduce(price){
    return price - 10;
  }
}
