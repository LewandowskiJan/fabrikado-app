import { LocationStrategy } from '@angular/common';
import { MockLocationStrategy } from '@angular/common/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MockComponent } from 'ng-mocks';

import { PlanetButtonComponent } from '@src/app/shared/layout/components/planet-button/planet-button.component';
import { DashboardComponent } from '@src/app/shared/layout/containers/dashboard/dashboard.component';

import { CosmosComponent } from './cosmos.component';

describe('CosmosComponent', () => {
  let component: CosmosComponent;
  let fixture: ComponentFixture<CosmosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'cosmos/planet/:id/overview', component: CosmosComponent },
          {
            path: '',
            redirectTo: 'cosmos/planet/1/overview',
            pathMatch: 'full',
          },
        ]),
        NoopAnimationsModule,
      ],
      declarations: [
        CosmosComponent,
        MockComponent(PlanetButtonComponent),
        MockComponent(DashboardComponent),
      ],
      providers: [
        { provide: LocationStrategy, useClass: MockLocationStrategy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
