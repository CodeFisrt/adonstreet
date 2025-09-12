import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hording } from './hording';

describe('Hording', () => {
  let component: Hording;
  let fixture: ComponentFixture<Hording>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hording]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hording);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
