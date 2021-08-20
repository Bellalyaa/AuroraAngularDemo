import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuroraService } from '../aurora.service';
import { HttpMessage } from '../format';


interface Article {
  content: string;
  cover: string;
  createTime: string;
  createUserId: number;
  headPortrait: string;
  id: number;
  tag: string;
  title: string;
  userName: string;
}

@Component({
  selector: 'app-home-article-list',
  templateUrl: './home-article-list.component.html',
  styleUrls: ['./home-article-list.component.less']
})
export class HomeArticleListComponent implements OnInit {
  articleList:Article[]=[];
  constructor(public aurorService:AuroraService,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.getAriticles();
  }

  getAriticles() {
   this.http.get<HttpMessage<Article[]>>(this.aurorService.getAriticleUrl)
    .subscribe((res:HttpMessage<Article[]>)=> {

      if(res.success) {
          this.articleList = res.response;
      }

    } )}

}
