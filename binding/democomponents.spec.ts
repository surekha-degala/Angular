import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Democomponents } from './democomponents';

describe('Democomponents', () => {
  let component: Democomponents;
  let fixture: ComponentFixture<Democomponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Democomponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Democomponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
