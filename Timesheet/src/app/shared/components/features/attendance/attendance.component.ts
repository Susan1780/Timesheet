import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';
// import { columnVal, JiraStatusVal, JiraTypeVal } from 'src/app/core/constants/constant-values';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  selected: any;
  date1: any;
  date2: any;
  days: any;
  showTimeOff: boolean = true;
  showAbsence:boolean = false;
  isBtnShown: boolean = false;
  balanceArray: any = ['Earned Leave', 'Special Leave'];
  holidayArray: any = ['Holi (Compulsory) (1 Day)', 'Mahavir Jayanthi (Optional) (1 Day)', 'Good Friday (Compulsory) (1 Day)', 'Vijayadasami (Optional) (2 days)'];
  form: any;
  disabled: boolean = true;
  formVal = [];
  
  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      leavetype : new FormControl(''),
      availabledays : new FormControl({value: '', disabled: this.disabled}),
      date1 : new FormControl(''),
      date2 : new FormControl(''),
      totaldays : new FormControl('')
    });

    this.form.patchValue({
      availabledays: 'Available Days - 6',
      totaldays : this.days
    })


    this.calculateDays();
    console.log(this.days);
  }
  
  calculateDays(){
      const startDate = new Date(this.date1);
      const endDate = new Date(this.date2);
  
      const timeInterval = endDate.getTime() - startDate.getTime();
  
      this.days = timeInterval / (1000 * 3600 * 24);
    console.log(this.days);

    }

  showDialog() {
    this.showTimeOff = false;
    this.showAbsence = true;
    this.isBtnShown = true;
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
