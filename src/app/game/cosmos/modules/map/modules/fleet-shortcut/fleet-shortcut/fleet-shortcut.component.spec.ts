import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetShortcutComponent } from './fleet-shortcut.component';

describe('FleetShortcutComponent', () => {
  let component: FleetShortcutComponent;
  let fixture: ComponentFixture<FleetShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetShortcutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FleetShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
