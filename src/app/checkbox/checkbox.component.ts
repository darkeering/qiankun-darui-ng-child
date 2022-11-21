import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  aaa = true

  constructor() { }

  ngOnInit(): void {
  }
  onStatusChange(status: boolean) {
    console.log('status', status);
    console.log('aaa', this.aaa);
    
  }

}
