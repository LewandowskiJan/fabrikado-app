import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiodeComponent } from './diode.component';

describe('DiodeComponent', () => {
  let component: DiodeComponent;
  let fixture: ComponentFixture<DiodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
