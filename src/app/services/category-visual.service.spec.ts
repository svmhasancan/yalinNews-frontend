import { TestBed } from '@angular/core/testing';

import { CategoryVisualService } from './category-visual.service';

describe('CategoryVisualService', () => {
  let service: CategoryVisualService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryVisualService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
