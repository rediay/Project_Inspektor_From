import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdPartyProfilingComponent } from './third-party-profiling.component';

describe('ThirdPartyProfilingComponent', () => {
  let component: ThirdPartyProfilingComponent;
  let fixture: ComponentFixture<ThirdPartyProfilingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdPartyProfilingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdPartyProfilingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
