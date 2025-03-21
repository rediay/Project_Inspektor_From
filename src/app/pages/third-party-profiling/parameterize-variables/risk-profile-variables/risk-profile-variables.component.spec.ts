import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskProfileVariablesComponent } from './risk-profile-variables.component';

describe('RiskProfileVariablesComponent', () => {
  let component: RiskProfileVariablesComponent;
  let fixture: ComponentFixture<RiskProfileVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskProfileVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskProfileVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
