import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarButtonsComponent } from './topbar-buttons.component';

describe('TopbarButtonsComponent', () => {
  let component: TopbarButtonsComponent;
  let fixture: ComponentFixture<TopbarButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
