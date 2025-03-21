import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskProfileVariablesFormComponent } from './risk-profile-variables-form.component';

describe('RiskProfileVariablesFormComponent', () => {
  let component: RiskProfileVariablesFormComponent;
  let fixture: ComponentFixture<RiskProfileVariablesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskProfileVariablesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskProfileVariablesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
