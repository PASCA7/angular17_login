import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj : Login

  constructor(private http:HttpClient){
    this.loginObj =  new Login();
  }

  onLogin(){
    this.http.post('https://miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert(true);
      }else {
        alert(false)
      }
    });
  }
}

export class Login {

  EmailId: string;
  Password: string;

  constructor() {
    this.Password="";
    this.EmailId="";
  }
}
