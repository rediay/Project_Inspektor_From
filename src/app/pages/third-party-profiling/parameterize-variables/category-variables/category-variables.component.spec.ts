import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryVariablesComponent } from './category-variables.component';

describe('CategoryVariablesComponent', () => {
  let component: CategoryVariablesComponent;
  let fixture: ComponentFixture<CategoryVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryVariablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
