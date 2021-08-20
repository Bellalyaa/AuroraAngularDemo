import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuroraService {
  public getAriticleUrl = 'api/Home/GetArticle'; 

  constructor(private http: HttpClient) { }
}
