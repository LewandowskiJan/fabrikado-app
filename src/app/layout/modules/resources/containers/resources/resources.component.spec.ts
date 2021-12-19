import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';

import { MockPipe, MockProvider } from 'ng-mocks';

import { Resource } from '@src/app/models/resource';

import { ResourcesService } from '../../services/resources.service';
import { NumberDisplayPipe } from './../../../../../shared/pipes/number-display/number-display.pipe';
import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;
  let socketMock: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ResourcesComponent,
        MockPipe(NumberDisplayPipe, (value: number) => value),
      ],
      providers: [
        MockProvider(ResourcesService, {
          resourceListener: () =>
            of({
              metal: 10,
              crystal: 10,
              deuterium: 10,
              energy: 10,
            } as Resource),
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
