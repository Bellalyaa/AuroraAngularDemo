import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuroraService } from '../aurora.service';


interface HttpMessage {
  msg: string;
  status: number;
  success: boolean;
  response: Article[];
}

interface Article {
content: string
cover: string
createTime: string
createUserId: number
headPortrait: string
id: number
tag: string
title: string
userName: string
}

@Component({
  selector: 'app-home-article-list',
  templateUrl: './home-article-list.component.html',
  styleUrls: ['./home-article-list.component.less']
})
export class HomeArticleListComponent implements OnInit {
  articleList:Article[]=[];
  constructor(public auroraService:AuroraService,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.getArticles();
  }

  getArticles() {
   this.http.get<HttpMessage>(this.auroraService.getArticleUrl)
    .subscribe((res:HttpMessage)=> {

      if(res.success) {
          this.articleList = res.response;
      }

    } ) ;
    console.log("articleList")}

}
