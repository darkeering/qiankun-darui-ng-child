import { Injectable } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  constructor(private route: ActivatedRoute) {
    console.log('ng1', this.route);
    this.route.url.subscribe((res) => {
      console.log('ng2', this.route);

    })
  }
}