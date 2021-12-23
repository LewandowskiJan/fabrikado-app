import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { MockComponent } from 'ng-mocks';

import { ButtonComponent } from '../../../../layout/components/button/button.component';
import { PlanetContainerComponent } from '../../../../layout/containers/planet-container/planet-container.component';
import { ResourcesComponent } from '../../../../layout/modules/resources/containers/resources/resources.component';
import { PlanetComponent } from './planet.component';

describe('PlanetComponent', () => {
  let component: PlanetComponent;
  let fixture: ComponentFixture<PlanetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NoopAnimationsModule],
      declarations: [
        PlanetComponent,
        MockComponent(ResourcesComponent),
        MockComponent(PlanetContainerComponent),
        MockComponent(ButtonComponent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
