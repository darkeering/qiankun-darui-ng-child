import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css']
})
export class TagsInputComponent implements OnInit {

  source = [
    'c++',
    'jave',
    'javascript'
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
