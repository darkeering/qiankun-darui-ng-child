import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {

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

  selectValue(event: any) {
    console.log('selectValue', event);

  }

}
