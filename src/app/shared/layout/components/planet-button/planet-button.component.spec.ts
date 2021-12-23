import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetButtonComponent } from './planet-button.component';

describe('PlanetButtonComponent', () => {
  let component: PlanetButtonComponent;
  let fixture: ComponentFixture<PlanetButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
