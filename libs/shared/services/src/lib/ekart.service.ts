import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
  providedIn: 'root',
})
export class EkartService {
  constructor(private httpClient: HttpClient) {}

  // getBookInfo(id: string): Observable<Book> {
  //   return this.httpClient.get<Book>(
  //     `https://www.googleapis.com/books/v1/volumes/${id}`
  //   );
  // }

  // getBooksBySearch(searchString: string) {
  //   if (searchString == '') {
  //     return of([]);
  //   } else {
  //     return this.httpClient
  //       .get<{ items: Book[] }>(
  //         `https://www.googleapis.com/books/v1/volumes?q=${searchString}`
  //       )
  //       .pipe(map((booksJson) => booksJson.items as Array<Book>));
  //   }
  // }

  getBookInfo(id: string): Observable<Book> {
    let params = new HttpParams();
    params = params.append('bookId', id);
    return this.httpClient.get<Book>(`api/bookinfo`, { params: params });
  }

  getBooksBySearch(searchString: string) {
    if (searchString == '') {
      return of([]);
    } else {
      let params = new HttpParams();
      params = params.append('searchString', searchString);

      return this.httpClient
        .get<{ items: Book[] }>(`api/searchBooks`, { params: params })
        .pipe(map((booksJson) => booksJson.items as Array<Book>));
    }
  }
}
