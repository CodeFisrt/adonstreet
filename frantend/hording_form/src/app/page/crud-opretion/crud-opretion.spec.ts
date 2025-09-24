import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudOpretion } from './crud-opretion';

describe('CrudOpretion', () => {
  let component: CrudOpretion;
  let fixture: ComponentFixture<CrudOpretion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudOpretion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudOpretion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
