import { TestBed, inject } from '@angular/core/testing';

import { LiteralService } from './literal.service';

describe('LiteralService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiteralService]
    });
  });

  it('should be created', inject([LiteralService], (service: LiteralService) => {
    expect(service).toBeTruthy();
  }));
});
