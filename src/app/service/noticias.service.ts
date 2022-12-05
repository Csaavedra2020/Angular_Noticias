import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http : HttpClient) { }

  getNoticias(parametros:any): Observable<any>
  {
    const URL = 'https://newsapi.org/v2/top-headlines?country='+parametros.pais+'&category='+parametros.categoria+'&apiKey=f0660d68bde74de98946e67b94d373fa'
    return this.http.get(URL);
  }
}
