import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMPTY, of } from 'rxjs';

import { MockProvider } from 'ng-mocks';

import { Building } from './../../../../../../@models/building';
import { Resource } from './../../../../../../@models/resource';
import { MineService } from './../../services/mine.service';
import { MineComponent } from './mine.component';

describe('MineComponent', () => {
  let component: MineComponent;
  let fixture: ComponentFixture<MineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MineComponent],
      providers: [
        MockProvider(MineService, {
          mines$: of([]),
          resources$: of({} as Resource),
          upgradeRestTime$: of([]),
          currentMine$: of({} as Building),
          selectDetails: () => EMPTY,
          onBuild: () => EMPTY,
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
