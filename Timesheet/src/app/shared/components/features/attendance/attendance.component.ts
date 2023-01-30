import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { columnVal, JiraStatusVal, JiraTypeVal } from 'src/app/core/constants/constant-values';
import { CommonService } from 'src/app/shared/services/common/common.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {


  constructor(private _service: CommonService) { }

  ngOnInit(): void {
    // this.formVal = new  FormGroup({
    //   date: new FormControl(''),
    //   jiraId : new FormControl(''),
    //   jiraType : new FormControl(''),
    //   // jiraStatus : new FormControl(''),
    //   jiraDesc : new FormControl(''),
    //   taskDesc : new FormControl('')
    // });

    // this.getValues();
  }

  // getValues(){
  //     this._service.getData().subscribe((res: any) =>{
  //     this.formArr = res;
  //     console.log(this.formArr.value);
  //    });
  // }

  // putValues($event: any){
  //   let payload = this.formVal.value;
  //   this._service.postData(payload).subscribe(() => {
  //     this.getValues();
  //   })
  // }

}
