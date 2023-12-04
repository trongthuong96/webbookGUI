import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookShow } from '../models/book/book.show';
import { apiUrl, bookUrl } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

   // book with id
   GetBookById(bookId: number): Observable<BookShow> {
    const url = `${apiUrl}/${bookUrl}/${bookId}`;
    return this.http.get<BookShow>(url);
  }

  // async GetBookById(bookId: number): Promise<BookShow | undefined> {
  //   const data = await fetch(`${apiUrl}/${bookUrl}/${bookId}`);
  //   console.log(data);
  //   return (await data.json()) ?? {};
  // }
}
