import { Component } from '@angular/core';
import { BookService } from '../app/book.service';

@Component({
  selector: 'app',
  templateUrl:'./app/app.component.html',
  providers:[BookService],
})
export class AppComponent  {}
