import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './contents/contents.component';
import { PubComponent } from './pub/pub.component';
import { ContentArticleComponent } from './content-article/content-article.component';
import { HomeComponent } from './content-home/home.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: '/contents', pathMatch: 'full' },
  {
    path: 'contents',
    component: ContentsComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'article', component: ContentArticleComponent },
    ],
  },
  { path: 'pub', component: PubComponent },
  { path: 'register', component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
