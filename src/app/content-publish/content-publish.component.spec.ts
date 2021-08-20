import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPublishComponent } from './content-publish.component';

describe('ContentPublishComponent', () => {
  let component: ContentPublishComponent;
  let fixture: ComponentFixture<ContentPublishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPublishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPublishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
