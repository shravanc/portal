import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private user_service: AuthService) { }

  ngOnInit() {
  }

  username = ""
  password = ""
  loginUser(event) {
    event.preventDefault();
    this.user_service.login(this.username, this.password).subscribe(
      data => {
        console.log("===============")
        console.log(event)
        console.log(data);
    });
    console.log("===============")
  }

}

