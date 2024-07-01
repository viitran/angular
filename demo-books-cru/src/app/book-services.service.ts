import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './model/book';

@Injectable({
  providedIn: 'root',
})
export class BookServicesService {
  URL = 'http://localhost:8080/books';
  constructor(private http: HttpClient) {}

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.URL);
  }

  save(book: Book): Observable<Book> {
    return this.http.post<Book>(`${this.URL}`, book);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.URL}/${id}`);
  }

  update(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.URL}/${book.id}`, book);
  }

  delete(id: any ): Observable<void> {
    return this.http.delete<void>(`${this.URL}/${id}`);
  }
}
