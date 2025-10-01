import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Writeups } from './writeups';

describe('Writeups', () => {
  let component: Writeups;
  let fixture: ComponentFixture<Writeups>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Writeups]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Writeups);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
