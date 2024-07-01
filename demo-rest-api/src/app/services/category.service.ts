import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  URL = 'http://localhost:8080/cate';
  constructor(private http: HttpClient) {}

  getAllCate(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }
}
