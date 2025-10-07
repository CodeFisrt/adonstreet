import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpData } from './emp-data';

describe('EmpData', () => {
  let component: EmpData;
  let fixture: ComponentFixture<EmpData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
