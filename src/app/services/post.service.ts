import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { urlglobal } from './apiglobal';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  public url = urlglobal.url;

  constructor(private _http: HttpClient)
  {

  }

  create(token, post): Observable<any>
  {
    // El JSON se rompe porque HTML entities, asi que este metodo limpia esa basura 
    // JJAJAJ basura no es pero casi que no puedo solucionarlo
    post.content = urlglobal.htmlEntities(post.content);

    let json = JSON.stringify(post);
    let params = "json="+json;
                                        
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                  .set('Authorization', token);
                                        
    
    return this._http.post(this.url + 'post', params, {headers});
  }

  getPosts(): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    
    return this._http.get(this.url + 'post' , {headers});
  }

  getPost(id): Observable<any>
  {
    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
    
    return this._http.get(this.url + 'post/'+ id , {headers});
  }

  updatepost(token, post, id): Observable<any>
  {
    post.content = urlglobal.htmlEntities(post.content);
    let json = JSON.stringify(post);
    let params = "json="+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization', token)
    
    return this._http.put(this.url + 'post/'+ id , params, {headers});
  }

  deletePost(token, id): Observable<any>
  {

    let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
                                   .set('Authorization', token)
    
    return this._http.delete(this.url + 'post/'+ id , {headers});
  }
}
