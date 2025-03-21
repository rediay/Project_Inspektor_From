import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingHistoricalReportComponent } from './consulting-historical-report.component';

describe('ConsultingHistoricalReportComponent', () => {
  let component: ConsultingHistoricalReportComponent;
  let fixture: ComponentFixture<ConsultingHistoricalReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultingHistoricalReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultingHistoricalReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
