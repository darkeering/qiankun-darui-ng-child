import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  TagsInputModule,
  ButtonModule,
  AutoCompleteModule,
  TextInputModule,
  CarouselModule,
  CheckBoxModule,
  DragDropModule,
  DrawerModule,
  DropDownModule,
  FullScreenModule,
  PanelModule,
  SearchModule,
  TagsModule,
  TooltipModule,
  IconsModule
} from 'angular-demo-darkeering';
import { AccordionModule, DevUIModule } from 'ng-devui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';
import { HomeComponent } from './home/home.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
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
import { FormsModule } from '@angular/forms';
import { IconsComponent } from './icons/icons.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    HomeComponent,
    AutoCompleteComponent,
    CarouselComponent,
    CheckboxComponent,
    DragDropComponent,
    DrawerComponent,
    DropdownComponent,
    FullScreenComponent,
    PanelComponent,
    SearchComponent,
    TagsComponent,
    TagsInputComponent,
    TooltipComponent,
    IconsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DevUIModule,
    AccordionModule,
    ButtonModule,
    AutoCompleteModule,
    TextInputModule,
    CarouselModule,
    CheckBoxModule,
    DragDropModule,
    DrawerModule,
    DropDownModule,
    FullScreenModule,
    PanelModule,
    SearchModule,
    TagsModule,
    TooltipModule,
    IconsModule,
    TagsInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
