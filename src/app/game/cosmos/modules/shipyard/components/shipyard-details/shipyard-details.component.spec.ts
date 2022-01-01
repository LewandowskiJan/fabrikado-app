import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipyardDetailsComponent } from './shipyard-details.component';

describe('ShipyardDetailsComponent', () => {
  let component: ShipyardDetailsComponent;
  let fixture: ComponentFixture<ShipyardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipyardDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipyardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
