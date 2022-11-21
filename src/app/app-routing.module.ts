import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore
  providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/ng-child' : '/' }]
})
export class AppRoutingModule { }
