import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetFavoritesComponent } from './fleet-favorites.component';

describe('FleetFavoritesComponent', () => {
  let component: FleetFavoritesComponent;
  let fixture: ComponentFixture<FleetFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
