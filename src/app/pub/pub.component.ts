import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuroraService } from '../aurora.service';
import  { Router } from '@angular/router'


class art{
  content: string =''
  cover: string=''
  tag: string=''
  title: string=''
}



@Component({
  selector: 'app-pub',
  templateUrl: './pub.component.html',
  styleUrls: ['./pub.component.less']
})
export class PubComponent implements OnInit {

  artPut: art = new art();

createUrl='http://localhost:5000/api/Article/Create'






  constructor(private http: HttpClient,private auroraService: AuroraService,private router: Router) { }

  ngOnInit(): void {

    console.log(this.artPut)
  }

  report() {
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auroraService.token
      })
    };
    this.http.post<art>(this.createUrl,this.artPut,httpOptions)
    .subscribe((artPut:art)=>{
      this.artPut=this.artPut
      this.router.navigate(['/contents/article'])
    })
  }


}
