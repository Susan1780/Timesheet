import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @Input() sideNavStatus: boolean = false;

  list = [
    {number: '1', name: 'attendance', icon: 'fa-solid fa-table-cells'},
    {number: '2', name: 'Clock-in Clock-out', icon: 'fa-solid fa-clock'},
    {number: '3', name: 'Task Progress', icon: 'fa-solid fa-list-check'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
