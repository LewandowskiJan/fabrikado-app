import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetRedirectComponent } from './planet-redirect.component';

describe('PlanetRedirectComponent', () => {
  let component: PlanetRedirectComponent;
  let fixture: ComponentFixture<PlanetRedirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetRedirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetRedirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
