import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MineThumbnailComponent } from './mine-thumbnail.component';

describe('MineThumbnailComponent', () => {
  let component: MineThumbnailComponent;
  let fixture: ComponentFixture<MineThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MineThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MineThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
