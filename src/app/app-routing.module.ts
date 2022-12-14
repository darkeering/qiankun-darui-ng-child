import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { DrawerComponent } from './drawer/drawer.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { FullScreenComponent } from './full-screen/full-screen.component';
import { PanelComponent } from './panel/panel.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { TagsInputComponent } from './tags-input/tags-input.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { IconsComponent } from './icons/icons.component';
import { AccordionComponent } from './accordion/accordion.component';
import { TabelComponent } from './tabel/tabel.component';

const routes: Routes = [
  { path: 'button', component: ButtonComponent },
  { path: 'accordion', component: AccordionComponent },
  { path: 'autoComplete', component: AutoCompleteComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'checkbox', component: CheckboxComponent },
  { path: 'dragDrop', component: DragDropComponent },
  { path: 'drawer', component: DrawerComponent },
  { path: 'dropDown', component: DropdownComponent },
  { path: 'fullScreen', component: FullScreenComponent },
  { path: 'panel', component: PanelComponent },
  { path: 'search', component: SearchComponent },
  { path: 'tags', component: TagsComponent },
  { path: 'tooltip', component: TooltipComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'tagsInput', component: TagsInputComponent },
  { path: 'tabel', component: TabelComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // @ts-ignore
  providers: [{ provide: APP_BASE_HREF, useValue: window.__POWERED_BY_QIANKUN__ ? '/ng-child' : '/' }]
})
export class AppRoutingModule { }
