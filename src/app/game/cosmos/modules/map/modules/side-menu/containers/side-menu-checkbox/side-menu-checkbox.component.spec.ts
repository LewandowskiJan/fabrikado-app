import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuCheckboxComponent } from './side-menu-checkbox.component';

describe('SideMenuCheckboxComponent', () => {
  let component: SideMenuCheckboxComponent;
  let fixture: ComponentFixture<SideMenuCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuCheckboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
