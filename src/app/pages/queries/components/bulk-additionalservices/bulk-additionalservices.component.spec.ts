import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkAdditionalservicesComponent } from './bulk-additionalservices.component';

describe('BulkAdditionalservicesComponent', () => {
  let component: BulkAdditionalservicesComponent;
  let fixture: ComponentFixture<BulkAdditionalservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkAdditionalservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkAdditionalservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
