import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }



  host = "http://amazon.stream.com";
  auth = "?auth_token=abc";
  base_url = this.host + ':3000'
  url = "";

  login(username, password): Observable<any> {
    return this.http.post(this.base_url + '/sessions' + this.auth, {
      session: {username: username, password: password}
    })
  }

  register(username, password, email): Observable<any> {
    return this.http.post(this.base_url + '/users' + this.auth, {
      user: {username: username, email: email, password: password}
    })
  }

  verify(verification_token): Observable<any>{
    console.log("------", verification_token)
    this.url = this.base_url + '/users/confirmation' + this.auth + "&token=" + verification_token
    console.log("*****", this.url)
    return this.http.get( this.url)
  }


}
