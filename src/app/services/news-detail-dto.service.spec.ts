import { TestBed } from '@angular/core/testing';

import { NewsDetailDtoService } from './news-detail-dto.service';

describe('NewsDetailDtoService', () => {
  let service: NewsDetailDtoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsDetailDtoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
