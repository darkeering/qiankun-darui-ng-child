import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tagList = [
    {
      name: 'label1'
    },
    {
      name: 'label2'
    },
    {
      name: 'label3'
    },
    {
      name: 'label4'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
