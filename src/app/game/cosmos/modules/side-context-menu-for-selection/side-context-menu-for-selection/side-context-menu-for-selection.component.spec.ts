import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContextMenuForSelectionComponent } from './side-context-menu-for-selection.component';

describe('SideContextMenuForSelectionComponent', () => {
  let component: SideContextMenuForSelectionComponent;
  let fixture: ComponentFixture<SideContextMenuForSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideContextMenuForSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideContextMenuForSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
