import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  constructor(private user_service: AuthService) { }

  ngOnInit() {
  }

  token = ""

  verifyUser(event) {
    event.preventDefault();
    this.user_service.verify(this.token).subscribe(
      data => {
        console.log("===============")
        console.log(event)
        console.log(data);
    });
    console.log("===============")
  }
}
