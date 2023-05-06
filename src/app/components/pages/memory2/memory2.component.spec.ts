import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Memory2Component } from './memory2.component';

describe('Memory2Component', () => {
  let component: Memory2Component;
  let fixture: ComponentFixture<Memory2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Memory2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Memory2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
