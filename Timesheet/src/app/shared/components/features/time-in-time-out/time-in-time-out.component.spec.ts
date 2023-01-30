import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeInTimeOutComponent } from './time-in-time-out.component';

describe('TimeInTimeOutComponent', () => {
  let component: TimeInTimeOutComponent;
  let fixture: ComponentFixture<TimeInTimeOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeInTimeOutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeInTimeOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
