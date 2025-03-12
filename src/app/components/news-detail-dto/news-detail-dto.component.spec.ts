import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDetailDtoComponent } from './news-detail-dto.component';

describe('NewsDetailDtoComponent', () => {
  let component: NewsDetailDtoComponent;
  let fixture: ComponentFixture<NewsDetailDtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsDetailDtoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsDetailDtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
