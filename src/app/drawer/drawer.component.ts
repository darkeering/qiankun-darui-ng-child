import { Component, OnInit } from '@angular/core';
import { DrawerService } from 'angular-demo-darkeering';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements OnInit {

  constructor(
    private drawerService: DrawerService
  ) { }

  ngOnInit(): void {
  }
  onClick(event: any) {
    this.drawerService.open()
  }
  show() {
    this.drawerService.show()
  }
  hide() {
    this.drawerService.hide()
  }

}
