import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
// import { CommonService } from 'src/app/shared/services/common/common.service';

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
  form!: FormGroup;
  formVal = [];
  startDate:any;
  endDate:any;

  constructor(public fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      leavemet: [''],
      availabledays: [''],
      caldate1: [''],
      caldate2: [''],
      totaldays: [''],
      comments: [''],
      leavetype: [''],
      selectEvent: [''],
    });

    this.form.patchValue({
      availabledays: '6',
      totaldays: '0',
      caldate2: this.currentDate,
    });
  }

  dateFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  };

  addEvent(event: any){
    console.log(event);
    this.calculateDays();
    if(this.form.controls['leavetype'].value === 'Half-a-day'){
      this.form.patchValue({
        totaldays: `${this.days - 0.5} Days`,
      });
    }
  }

  calculateDays() {
      const startDate = this.form.controls['caldate1'].value;
      const endDate = this.form.controls['caldate2'].value;
      const timeInterval = endDate.getTime() - startDate.getTime();
      this.days = (timeInterval / (1000 * 3600 * 24)).toFixed();
    
    this.form.patchValue({
      totaldays: `${this.days} Days`,
    });
  }

  showDialog() {
    this.showTimeOff = false;
    this.showAbsence = true;
    this.isBtnShown = true;
  }

  onSelect(event: any) {
    console.log(event);
    this.form.patchValue({
      caldate1: new Date(this.selectedDate),
    });
    this.addEvent(event);
  }

  onSubmit() {
    alert('Submitted successfully!');
    console.log(this.form.value);
    console.log(this.form.controls['caldate1'].value)
    this.form.reset();
    this.showTimeOff = true;
    this.showAbsence = false;
    this.isBtnShown = false;
  }

  goBack() {
    this.showTimeOff = true;
    this.showAbsence = false;
    this.isBtnShown = false;
  }
}
