import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getAllProduct(): Observable<any[]> {
    return this.http.get<any[]>(`${this.URL}/product`);
  }

  save(product: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/create`, product);
  }

  delete(id: any): Observable<void> {
    return this.http.post<void>(`${this.URL}/remove/${id}`, {});
  }

  findById(id: any): Observable<any> {
    return this.http.get<any>(`${this.URL}/${id}`);
  }

  updateProduct(product: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/edit/${product.id}`, product);
  }
}
