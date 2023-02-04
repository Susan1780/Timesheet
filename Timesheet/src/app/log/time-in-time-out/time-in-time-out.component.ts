import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-in-time-out',
  templateUrl: './time-in-time-out.component.html',
  styleUrls: ['./time-in-time-out.component.css']
})
export class TimeInTimeOutComponent implements OnInit {

  dateNow: any;
  startTime: any;
  endTime: any;
  totalTime: any;
  todayDate = new Date();
  clckVariable: string = 'Clock IN';
  btnBool:boolean = false;
  data: any = [{"date": "01/17/2023", "inTime": "10:00 AM", "outTime": "06:00 PM"}];
  displayedColumns: string[] = ['date', 'inTime', 'outTime'];
  dataSource:any = [];

  constructor() {
    setInterval(() => {
      this.dateNow = new Date();
    },100);
   }

  ngOnInit(): void {
    
  }

  clockIn() {
    this.btnBool =! this.btnBool;
    this.clckVariable = this.btnBool ? 'Clock OUT' : 'Clock IN';
    this.clckVariable === 'Clock IN' ? this.startTime = new Date() : this.endTime = new Date();
    this.clckVariable === 'Clock IN' ? this.dataSource.push({"outTime" : this.startTime}) : this.dataSource.push({"inTime" : this.endTime});
    this.clckVariable === 'Clock IN' ? this.data.push({"date" : this.dateNow}) : null;
    console.log(this.dataSource);
  }

}
