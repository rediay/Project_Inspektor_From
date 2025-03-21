import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryDetailedviewComponent } from './query-detailedview.component';

describe('QueryDetailedviewComponent', () => {
  let component: QueryDetailedviewComponent;
  let fixture: ComponentFixture<QueryDetailedviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryDetailedviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryDetailedviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
