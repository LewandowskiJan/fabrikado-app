import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmosStartPageComponent } from './cosmos-start-page.component';

describe('CosmosStartPageComponent', () => {
  let component: CosmosStartPageComponent;
  let fixture: ComponentFixture<CosmosStartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CosmosStartPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmosStartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
