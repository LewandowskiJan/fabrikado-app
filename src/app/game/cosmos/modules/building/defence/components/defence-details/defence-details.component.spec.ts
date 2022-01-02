import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefenceDetailsComponent } from './defence-details.component';

describe('DefenceDetailsComponent', () => {
  let component: DefenceDetailsComponent;
  let fixture: ComponentFixture<DefenceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefenceDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
