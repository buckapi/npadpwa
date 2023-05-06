import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Memory1Component } from './memory1.component';

describe('Memory1Component', () => {
  let component: Memory1Component;
  let fixture: ComponentFixture<Memory1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Memory1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Memory1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
