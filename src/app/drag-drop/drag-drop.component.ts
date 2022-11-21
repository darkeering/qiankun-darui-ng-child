import { Component, OnInit, Renderer2 } from '@angular/core';
import { DragDropService } from 'angular-demo-darkeering';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent implements OnInit {


  constructor(
    private dragDropService: DragDropService,
    private render: Renderer2
  ) { }

  list1: any = [
    'c++',
    'jave',
    'js',
    'python',
  ]
  list2: any[] = []

  ngOnInit(): void {
  }

  drop(event: any) {
    const { parentNode, currentDrag } = event
    this.render.removeChild(parentNode, currentDrag)
    this.list2.push(currentDrag.textContent)
  }
}
