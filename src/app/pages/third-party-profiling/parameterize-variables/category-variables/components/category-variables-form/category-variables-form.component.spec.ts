import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryVariablesFormComponent } from './category-variables-form.component';

describe('CategoryVariablesFormComponent', () => {
  let component: CategoryVariablesFormComponent;
  let fixture: ComponentFixture<CategoryVariablesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryVariablesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryVariablesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
