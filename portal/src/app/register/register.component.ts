import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private user_service: AuthService) { }

  ngOnInit() {
  }

  username = "";
  email = "";
  password = "";

  registerUser(event) {
    event.preventDefault();
    this.user_service.register(this.username, this.password, this.email).subscribe(
      data => {
        console.log("===============")
        console.log(event)
        console.log(data);
    });
    console.log("===============")
  }

}
