import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sideNavToggled = new EventEmitter<boolean>();
  menuStatus:boolean = false;
  constructor() { }

  list = [
    {number: '1', name: 'home', icon: 'fa-solid fa-table-cells', route : '/home'},
    {number: '2', name: 'create absents', icon: 'fa-solid fa-clock', route : 'home/attendance'},
    {number: '3', name: 'timesheet', icon: 'fa-solid fa-list-check', route : 'home/time-in'},
    {number: '4', name: 'Task Progress', route: 'home/task'}
  ];

  ngOnInit(): void {
  }

  logOut(){
    alert('logout success');
  }
}
