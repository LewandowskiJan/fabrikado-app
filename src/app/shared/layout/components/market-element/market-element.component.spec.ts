import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketElementComponent } from './market-element.component';

describe('MarketElementComponent', () => {
  let component: MarketElementComponent;
  let fixture: ComponentFixture<MarketElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
