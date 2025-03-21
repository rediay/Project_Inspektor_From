import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingHistoricalReportDetailComponent } from './consulting-historical-report-detail.component';

describe('ConsultingHistoricalReportDetailComponent', () => {
  let component: ConsultingHistoricalReportDetailComponent;
  let fixture: ComponentFixture<ConsultingHistoricalReportDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingHistoricalReportDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingHistoricalReportDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
