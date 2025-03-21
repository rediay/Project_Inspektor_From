/* eslint-disable @typescript-eslint/no-unused-vars */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ThirdpartymanageComponent} from './thirdpartymanage.component';

describe('ThirdpartymanageComponent', () => {
  let component: ThirdpartymanageComponent;
  let fixture: ComponentFixture<ThirdpartymanageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdpartymanageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdpartymanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
