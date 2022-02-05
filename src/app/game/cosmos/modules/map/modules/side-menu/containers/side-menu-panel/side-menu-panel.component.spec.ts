import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuPanelComponent } from './side-menu-panel.component';

describe('SideMenuPanelComponent', () => {
  let component: SideMenuPanelComponent;
  let fixture: ComponentFixture<SideMenuPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
