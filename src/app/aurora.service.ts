import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuroraService {
  public getArticleUrl:string = 'http://localhost:5000/api/Home/GetArticle';
  private loginUrl = 'http://localhost:5000/api/Auth/Login'


  public token:string = '';









  constructor(private http: HttpClient) { }
}
