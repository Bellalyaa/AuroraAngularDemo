import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRotationComponent } from './home-rotation.component';

describe('HomeRotationComponent', () => {
  let component: HomeRotationComponent;
  let fixture: ComponentFixture<HomeRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeRotationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
