import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-child';
  menu = [
    { title: 'Home', key: 'home' },
    { title: 'Button', key: 'button' },
    { title: 'Auto Complete', key: 'autoComplete' },
    { title: 'Carousel', key: 'carousel' },
    { title: 'Checkbox', key: 'checkbox' },
    { title: 'Drag Drop', key: 'dragDrop' },
    { title: 'Drawer', key: 'drawer' },
    { title: 'Dropdown', key: 'dropDown' },
    { title: 'Full Screen', key: 'fullScreen' },
    { title: 'Panel', key: 'panel' },
    { title: 'Search', key: 'search' },
    { title: 'Tags', key: 'tags' },
    // { title: 'Tags Input', key: 'tagsInput' },
    { title: 'Tooltip', key: 'tooltip' },
  ];

  constructor(private router: Router) { }


  itemClick(event: any) {
    console.log('item click', event);
    this.router.navigate([event.item.key])
  }
}
