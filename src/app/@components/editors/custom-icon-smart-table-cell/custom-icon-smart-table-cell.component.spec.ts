import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomIconSmartTableCellComponent } from './custom-icon-smart-table-cell.component';

describe('CustomIconSmartTableCellComponent', () => {
  let component: CustomIconSmartTableCellComponent;
  let fixture: ComponentFixture<CustomIconSmartTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomIconSmartTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomIconSmartTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
