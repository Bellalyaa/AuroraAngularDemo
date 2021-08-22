import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './content-home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { HomeRotationComponent } from './home-rotation/home-rotation.component';
import { HomeQuestionAnswersComponent } from './home-question-answers/home-question-answers.component';
import { HomeArticleListComponent } from './home-article-list/home-article-list.component';
import { ContentFormComponent } from './content-form/content-form.component';
import { ContentPublishComponent } from './content-publish/content-publish.component';
import { ContentRankingComponent } from './content-ranking/content-ranking.component';
import { ContentRecommendComponent } from './content-recommend/content-recommend.component';
import { ContentArticleComponent } from './content-article/content-article.component';
import { PubComponent } from './pub/pub.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ContentsComponent,
    HomeRotationComponent,
    HomeQuestionAnswersComponent,
    HomeArticleListComponent,
    ContentFormComponent,
    ContentPublishComponent,
    ContentRankingComponent,
    ContentRecommendComponent,
    ContentArticleComponent,
    PubComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
