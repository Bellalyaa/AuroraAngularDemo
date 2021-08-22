import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuroraService } from '../aurora.service';

interface httpMessage{
  msg: string;
  response:article[];
  status: number;
  success: boolean;
}
interface article {
  content: string
  cover: string
  createTime: string
  createUserId: number
  headPortrait: string
  id: number
  tag: string
  title: string
  userName: string}

@Component({
  selector: 'app-content-article',
  templateUrl: './content-article.component.html',
  styleUrls: ['./content-article.component.less']
})
export class ContentArticleComponent implements OnInit {
  articleList:article[]=[];

  constructor(
    public auroraService:AuroraService,
    private http:HttpClient) { }

  ngOnInit(): void {
    this.getArticle ()
  }

  getArticle () {
    this.http.get<httpMessage> (this.auroraService.getArticleUrl)
    .subscribe((res:httpMessage)=>{
      if(res.success) {
         this.articleList=res.response
      }
    })
  }


}
