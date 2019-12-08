import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) { }


  host = "http://amazon.stream.com";
  //host = "http://netflix.stream.com";

  auth = "?auth_token=abc";
  base_url = this.host + ':3000/admin/lists';
  url = "";
  getMenuLists() {
    this.url  = this.base_url + '/tab' + this.auth
    console.log("=========", this.url)
    return this.http.get(this.url)

    //return this.http.get(this.host + ':3000/lists/tab' + this.auth)
  }

  getList(list_id) {
    this.url  = this.base_url + '/' +list_id + this.auth
    console.log("***********", this.url)
    return this.http.get( this.url)
  }


}
