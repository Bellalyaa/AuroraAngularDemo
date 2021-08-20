import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRecommendComponent } from './content-recommend.component';

describe('ContentRecommendComponent', () => {
  let component: ContentRecommendComponent;
  let fixture: ComponentFixture<ContentRecommendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRecommendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
