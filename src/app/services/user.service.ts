import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlglobal } from './apiglobal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService 
{
  url: string;
  token: string;
  identity: any;

  constructor(public http: HttpClient)
  {
    this.url = urlglobal.url;
  }
  
  register(user): Observable<any>
  {
    let json = JSON.stringify(user);
    // El backend solo lee un String, 
    // y pues ese string se codifica a JSON en el backend

    let params = 'json='+json;
    // key: json 
    // value de json de user
    // COMO EN POSTMAN !! WUUAO
        
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
    // Indico las cabecera 

    return this.http.post(this.url+'register',params, {headers: headers});

  }

  signup(user, gettoken = null): Observable<any>
  {
    if(gettoken != null)
    {
      user.getToken = 'true';
    }

    let json = JSON.stringify(user);
    let params = 'json='+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
  
    return this.http.post(this.url+'login',params, {headers: headers});
  }

  updateuser(token, user): Observable<any>
  {
    user.description = urlglobal.htmlEntities(user.description);
    let json = JSON.stringify(user);
    // Lo convierto a string para enviarlo al API

    let params = "json="+json;
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization', token);

    return this.http.put(this.url+'user/update',params,{headers: headers});

  }

  getIdentity()
  {
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity && identity != "undefined")
    {
      this.identity = identity;
    }
    else
    {
      this.identity = null;
    }
    return this.identity;
  }

  getToken()
  {
    let token =localStorage.getItem('token');

    if(token && token != "undefined")
    {
      this.token = token;
    }
    else 
    {
      this.token = null;
    }

    return this.token;
  }

  traerUser(id): Observable<any>
  {
    return this.http.get(this.url+'user/detail/'+id);
  }

  getPosts(id): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type', 'aplication/x-www-form-urlencoded')
    
    return this.http.get(`${this.url}post/user/${id}`, {headers})
  }
}
