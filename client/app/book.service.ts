import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class BookService{
  constructor(private http: Http){
    console.log('BookService Started....')
  }

headers:string;
id:number;

  getBooks(){
    return this.http.get('/api/books').map(res => res.json());
}

removeBook(id: number){
  return this.http.delete('/api/book/'+ id).map(res => res.json());
  }
  addBook(newBook: any){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('/api/books', JSON.stringify(newBook),{headers: headers})
      .map(res => res.json());
  }
  findBook(id :number){
   return this.http.get('api/book/' + id).map(res => res.json());
    
    
  }
}