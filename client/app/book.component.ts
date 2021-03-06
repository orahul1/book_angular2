import { Component, OnInit } from '@angular/core';
import { BookService } from './../app/book.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Book } from './../app/Book';

@Component({
    selector: 'book',
    moduleId: module.id,
    templateUrl: 'book.component.html',
    providers: [BookService],

})

export class BookComponent { 
    books: Book[];
    onebook : Book[];
    id: string;
    name:string;
    author:string;
    searchid: number;

    constructor(private bookService: BookService) {}

   ngOnInit(){
       this.GetBooks();
   }

   GetBooks(){
       this.bookService.getBooks()
           .subscribe(books => {
               this.books = books;
       });
   }

   removeBook(id: number) {
       var books = this.books;
       this.bookService.removeBook(id).subscribe(data => {
           this.GetBooks();
       });
   }
addBook(){
var newBook = {
    id : this.id,
    name: this.name,
    author: this.author
     } 
     this.bookService.addBook(newBook)
     .subscribe(books => {
     this.books.push(books);
     this.id ='';
     this.name='';
     this.author='';
     }); 
  }
  findBook(){
           var id = this.searchid;   
           this.bookService.findBook(id).subscribe( onebook => {
               this.onebook = onebook;
               this.id = '';
             });        
      }
}
