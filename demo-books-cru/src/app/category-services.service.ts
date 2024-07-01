import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from './model/category';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryServicesService {
  URL = 'http://localhost:8080/category';

  constructor(private http: HttpClient){}

  getAllCate(): Observable<Category[]>{
    return this.http.get<Category[]>(this.URL);
  }

}
