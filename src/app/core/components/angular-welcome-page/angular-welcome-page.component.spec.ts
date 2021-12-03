import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWelcomePageComponent } from './angular-welcome-page.component';

describe('AngularWelcomePageComponent', () => {
  let component: AngularWelcomePageComponent;
  let fixture: ComponentFixture<AngularWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularWelcomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
