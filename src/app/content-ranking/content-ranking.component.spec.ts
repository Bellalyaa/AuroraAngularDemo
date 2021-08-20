import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentRankingComponent } from './content-ranking.component';

describe('ContentRankingComponent', () => {
  let component: ContentRankingComponent;
  let fixture: ComponentFixture<ContentRankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentRankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
