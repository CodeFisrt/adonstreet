import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReForm } from './re-form';

describe('ReForm', () => {
  let component: ReForm;
  let fixture: ComponentFixture<ReForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
