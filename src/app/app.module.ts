import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PaginationButtons} from "./pagination-buttons.component";
import {PhotoViewer} from "./photo-viewer.comonent";

@NgModule({
  declarations: [
    AppComponent, PaginationButtons, PhotoViewer
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
