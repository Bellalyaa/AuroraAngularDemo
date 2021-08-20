import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeQuestionAnswersComponent } from './home-question-answers.component';

describe('HomeQuestionAnswersComponent', () => {
  let component: HomeQuestionAnswersComponent;
  let fixture: ComponentFixture<HomeQuestionAnswersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeQuestionAnswersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeQuestionAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
