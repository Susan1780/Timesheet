import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
// import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
// import { FormControl, FormGroup } from '@angular/forms';
// import { columnVal, JiraStatusVal, JiraTypeVal } from 'src/app/core/constants/constant-values';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css'],
})
export class AttendanceComponent implements OnInit {

  currentDate: any = new Date();
  selectedDate: any;
  date1: any;
  date2: any;
  days: any;
  showTimeOff: boolean = true;
  showAbsence: boolean = false;
  isBtnShown: boolean = false;
  balanceArray: any = ['Earned Leave', 'Special Leave'];
  holidayArray: any = [
    'Holi (Compulsory) (1 Day)',
    'Mahavir Jayanthi (Optional) (1 Day)',
    'Good Friday (Compulsory) (1 Day)',
    'Vijayadasami (Optional) (2 days)',
  ];
  form: any;
  disabled: boolean = true;
  formVal = [];

  constructor(private _service: CommonService, public fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      leavetype: new FormControl(),
      availabledays: new FormControl({ value: '', disabled: this.disabled }),
      caldate1: new FormControl(),
      caldate2: new FormControl(),
      totaldays: new FormControl({ value: '', disabled: this.disabled }),
      comments: new FormControl(),
    });

    this.form.patchValue({
      availabledays: 'Available Days - 6',
      totaldays: '0 Days',
      caldate2: this.currentDate
    });
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  dateChanged1(event: any) {
    this.date1 = event.target.value;
  }

  dateChanged2(event: any) {
    this.date2 = event.target.value;
    this.calculateDays();
    this.form.patchValue({
      totaldays: `${this.days} Days`,
    });
  }

  calculateDays() {debugger;
    const startDate = new Date(this.date1);
    // let startDate = new Date();
    // if(this.onSelect!){debugger;
    //   startDate = new Date(this.selectedDate);
    // }else {
    //   startDate = new Date(this.date1);
    // }
    const endDate = new Date(this.date2);
    const timeInterval = endDate.getTime() - startDate.getTime();
    this.days = timeInterval / (1000 * 3600 * 24);
  }

  showDialog() {
    this.showTimeOff = false;
    this.showAbsence = true;
    this.isBtnShown = true;
  }

  onSelect(event: any) {
    console.log(event);
    // this.showTimeOff = false;
    // this.showAbsence = true;
    // this.isBtnShown = true;
    this.form.patchValue({
      caldate1: new Date(this.selectedDate)
    });
  }

  onSubmit() {
    alert('Submitted successfully!');
    this.form.reset();
    this.showTimeOff = true;
    this.showAbsence = false;
    this.isBtnShown = false;
    console.log(this.form.value);
  }

  goBack() {
    this.showTimeOff = true;
    this.showAbsence = false;
    this.isBtnShown = false;
  }
}
