import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineDetailComponent } from './mine-detail.component';

describe('MineDetailComponent', () => {
  let component: MineDetailComponent;
  let fixture: ComponentFixture<MineDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
