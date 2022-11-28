import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {
  data = [
    {
      title: 'Title 1',
      children: [
        {
          title: 'Title 1.1',
          children: [
            {
              title: 'Title 1.1.1'
            }
          ]
        },
        {
          title: 'Title 1.2'
        },
      ]
    },
    {
      title: 'Title 2'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
