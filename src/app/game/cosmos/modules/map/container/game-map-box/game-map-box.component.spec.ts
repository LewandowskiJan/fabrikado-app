import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMapBoxComponent } from './game-map-box.component';

describe('GameMapBoxComponent', () => {
  let component: GameMapBoxComponent;
  let fixture: ComponentFixture<GameMapBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameMapBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMapBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
