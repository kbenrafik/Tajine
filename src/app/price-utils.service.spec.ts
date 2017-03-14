import { TestBed, inject } from '@angular/core/testing';

import { PriceUtilsService } from './price-utils.service';

describe('PriceUtilsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceUtilsService]
    });
  });

  it('should ...', inject([PriceUtilsService], (service: PriceUtilsService) => {
    expect(service).toBeTruthy();
  }));
});
