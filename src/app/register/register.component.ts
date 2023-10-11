import { AuthService } from './../services/auth.service';
import { User } from './../model/User.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auth:AuthService) { }

  
  User=new User();


  ngOnInit(): void {
  }

  register(){
    console.log(this.User.password)
    this.auth.Register(this.User).subscribe(
      data=>{
        console.log(data);
        alert("Register success");
      },
      err=>{
        console.log(err);
      }
    )
  }

}
