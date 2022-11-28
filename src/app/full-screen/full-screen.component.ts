import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styleUrls: ['./full-screen.component.css']
})
export class FullScreenComponent implements OnInit {

  isFull1 = false
  isFull2 = false
  constructor() { }
  ngOnInit(): void {
  }

  toggleFullScreen1(status: boolean) {
    this.isFull1 = status
    console.log('toggleFullScreen1', status);
    
  }
  toggleFullScreen2(status: boolean) {
    this.isFull2 = status
    console.log('toggleFullScreen2', status);
  }
}
