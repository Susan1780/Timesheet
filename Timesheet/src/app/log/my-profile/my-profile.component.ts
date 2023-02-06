import { Component, OnInit } from '@angular/core';
import { data } from '../../shared/modal/user';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  
  url = '';
  userData = data;
  
  constructor() { }

  ngOnInit(): void {
  }

  
  onSelectFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      }
    }
  }
// public delete(){
//     this.url = null;
//   }
}
