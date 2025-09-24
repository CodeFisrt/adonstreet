import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Finished } from './finished';

describe('Finished', () => {
  let component: Finished;
  let fixture: ComponentFixture<Finished>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Finished]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Finished);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
