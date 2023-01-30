import { Component, OnInit } from '@angular/core';
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
  showTimeOff: boolean = true;
  showAbsence:boolean = false;
  balanceArray: any = ['Earned Leave', 'Special Leave'];
  holidayArray: any = ['Holi (Compulsory) (1 Day)', 'Mahavir Jayanthi (Optional) (1 Day)', 'Good Friday (Compulsory) (1 Day)', 'Vijayadasami (Optional) (2 days)'];
  constructor(private _service: CommonService) { }

  ngOnInit(): void {
  }
  
}
