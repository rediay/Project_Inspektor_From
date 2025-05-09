/* eslint-disable @typescript-eslint/no-unused-vars */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SentComponent } from './sent.component';

describe('SentComponent', () => {
  let component: SentComponent;
  let fixture: ComponentFixture<SentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
