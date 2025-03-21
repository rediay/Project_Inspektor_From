import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSmartTableCellComponent } from './link-smart-table-cell.component';

describe('LinkSmartTableCellComponent', () => {
  let component: LinkSmartTableCellComponent;
  let fixture: ComponentFixture<LinkSmartTableCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkSmartTableCellComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSmartTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
