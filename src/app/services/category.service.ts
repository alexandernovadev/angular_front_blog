import { Injectable } from '@angular/core';
import { urlglobal } from './apiglobal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url = urlglobal.url;
  token: string;

  constructor(private http:HttpClient)
  {

  }

  addnewCategory(token, category): Observable<any>
  {
    let json = JSON.stringify(category);
    // El backend solo lee un String, 
    // y pues ese string se codifica a JSON en el backend

    let params = 'json='+json;
    // key: json 
    // value de json de user
    // COMO EN POSTMAN !! WUUAO
        
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization', token);
    // Indico las cabecera 

    return this.http.post(this.url+'category',params, {headers: headers});

  }

  getCategories(): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type', 'aplication/x-www-form-urlencoded')
    
    return this.http.get(this.url +'category', {headers})
  }
  
  getCategory(id): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type', 'aplication/x-www-form-urlencoded')
    
    return this.http.get(`${this.url}category/${id}`, {headers})
  }

  getPosts(id): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type', 'aplication/x-www-form-urlencoded')
    
    return this.http.get(`${this.url}post/category/${id}`, {headers})
  }
  
}
