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
  // bool: boolean = true;
  // bool1: boolean = false;
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

    // if(this.form.leavetype === 'Half-a-day'){
    //   this.form.setValue({
    //     totaldays: '0.5'
    //   });
    // }

    // if(this.bool1){
    //   this.form.patchValue({
    //     totaldays: '0.5'
    //   });
    // }
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    return day !== 0 && day !== 6;
  };

  dateChanged1(event: any) {
    // this.bool = false;
    // this.bool1 = false;
    this.date1 = event.target.value;
  }

  dateChanged2(event: any) {
    // this.bool = false;
    // this.bool1 = false;
    this.date2 = event.target.value;
  }

  calculateDays() {
    // debugger;
    // if (this.bool === true) {
    //   const startDate = new Date(this.selectedDate);
    //   const endDate = new Date(this.currentDate);
    //   const timeInterval = endDate.getTime() - startDate.getTime();
    //   this.days = (timeInterval / (1000 * 3600 * 24)).toFixed();
    // } else if (this.bool === false) {
    //   const startingDate = this.bool1 ? new Date(this.date1) : new Date(this.selectedDate);
    //   const endingDate = this.bool1 ? new Date(this.currentDate) : new Date(this.date2);
    //   const timeBtwn = endingDate.getTime() - startingDate.getTime();
    //   this.days = (timeBtwn / (1000 * 3600 * 24)).toFixed();
    // } else {
    //   return;
    // }

      const startDate = this.form.controls['caldate1'].value;
      const endDate = this.form.controls['caldate2'].value;
      const timeInterval = endDate.getTime() - startDate.getTime();
      this.days = (timeInterval / (1000 * 3600 * 24)).toFixed();
    
    this.form.patchValue({
      totaldays: `${this.days} Days`,
    });
  }
  inputChanged(event:any){
    this.startDate = event.target.value;
  }
  inputChanged2(event:any){
    this.endDate = event.target.value;
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
  }

  onSubmit() {
    alert('Submitted successfully!');
    console.log(this.form.value);
    console.log(this.form.controls['caldate1'].value)
    // this.form.reset();
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
