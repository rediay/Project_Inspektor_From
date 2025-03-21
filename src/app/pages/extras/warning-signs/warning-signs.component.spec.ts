import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarningSignsComponent } from './warning-signs.component';

describe('WarningSignsComponent', () => {
  let component: WarningSignsComponent;
  let fixture: ComponentFixture<WarningSignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarningSignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarningSignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
