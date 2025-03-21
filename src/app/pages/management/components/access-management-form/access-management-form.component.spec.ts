import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessManagementFormComponent } from './access-management-form.component';

describe('UserManagementFormComponent', () => {
  let component: AccessManagementFormComponent;
  let fixture: ComponentFixture<AccessManagementFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessManagementFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
