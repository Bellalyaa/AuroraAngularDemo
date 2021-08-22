import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuroraService } from '../aurora.service';

interface HttpLoginMessage {
  msg: string;
  status: number;
  success: boolean;
  response: string;
}
interface HttpArtMessage {
  msg: string;
  status: number;
  success: boolean;
  response: article[];
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
  userName: string
}





@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent implements OnInit {
  loginName: string = '';
  loginPassWord: string = '';
  private loginUrl = 'http://localhost:5000/api/Auth/Login'
  private artUrl = 'http://localhost:5000/api/Article/GetList'


  constructor(private http: HttpClient, private auroraService: AuroraService) { }

  ngOnInit(): void {
  }

  submit() {
    const url = `${this.loginUrl}?loginName=${this.loginName}&loginPassWord=${this.loginPassWord}`
    this.http.get<HttpLoginMessage>(url)
      .subscribe((res: HttpLoginMessage) => {
        if (res.success) {
          this.auroraService.token = res.response;
          let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + res.response
            })
          };
          this.http.get<HttpArtMessage>(this.artUrl,httpOptions)
            .subscribe((art: HttpArtMessage) => {
              console.log(art)

            })
        }
      })


  }




}
