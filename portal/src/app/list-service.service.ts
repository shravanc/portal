import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http: HttpClient) { }

  getMenuLists() {
    return this.http.get('http://localhost:3000/lists/tab')
  }

  getList(list_id) {
    return this.http.get('http://localhost:3000/lists/'+list_id)
  }


}
