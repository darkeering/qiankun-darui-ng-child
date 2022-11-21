import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  source = [
    'C++',
    'Java',
    'Javascript',
    'PHP',
    'Python',
    'Go',
  ]

  constructor() { }
  

  ngOnInit(): void {
  }

  selectItem($event: any) {
    console.log($event);
    
  }

}
