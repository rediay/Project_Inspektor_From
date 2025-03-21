import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterRoiComponent } from './register-roi.component';

describe('RegisterRoiComponent', () => {
  let component: RegisterRoiComponent;
  let fixture: ComponentFixture<RegisterRoiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterRoiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterRoiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
