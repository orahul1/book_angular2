import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BookComponent } from './book.component';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule],
  declarations: [ AppComponent,BookComponent],
  bootstrap:    [ AppComponent ],
 
})
export class AppModule { }
