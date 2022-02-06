import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetAdmiralAvatarComponent } from './fleet-admiral-avatar.component';

describe('FleetAdmiralAvatarComponent', () => {
  let component: FleetAdmiralAvatarComponent;
  let fixture: ComponentFixture<FleetAdmiralAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetAdmiralAvatarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetAdmiralAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
