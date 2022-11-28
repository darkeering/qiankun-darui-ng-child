import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabel',
  templateUrl: './tabel.component.html',
  styleUrls: ['./tabel.component.css']
})
export class TabelComponent implements OnInit {

  @ViewChild('action') action: any
  colsConfig: any = [
  ]
  data: any = [
    {
      name: 'Eason',
      age: '18',
      address: '辽宁，大连',
      tags: 'NICE',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
    {
      name: 'Joshon',
      age: '120',
      address: '江苏，南京',
      tags: 'DEVELOPER',
    },
  ]
  constructor(
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.colsConfig = [
      {
        key: 'name',
        title: 'Name',
      },
      {
        key: 'age',
        title: 'Age',
      },
      {
        key: 'address',
        title: 'Address',
      },
      {
        key: 'tags',
        title: 'Tags',
      },
      {
        key: 'action',
        title: 'Action',
        render: this.action
      },
    ]
    this.cd.detectChanges()
  }

}
