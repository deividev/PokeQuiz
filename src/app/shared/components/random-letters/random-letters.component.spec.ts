import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomLettersComponent } from './random-letters.component';

describe('RandomLettersComponent', () => {
  let component: RandomLettersComponent;
  let fixture: ComponentFixture<RandomLettersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomLettersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomLettersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
