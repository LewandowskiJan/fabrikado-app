import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketElementDetailsComponent } from './market-element-details.component';

describe('MarketElementDetailsComponent', () => {
  let component: MarketElementDetailsComponent;
  let fixture: ComponentFixture<MarketElementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketElementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketElementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
