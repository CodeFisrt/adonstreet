import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raw } from './raw';

describe('Raw', () => {
  let component: Raw;
  let fixture: ComponentFixture<Raw>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Raw]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raw);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
