import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-website-body',
  templateUrl: './website-body.component.html',
  styleUrls: ['./website-body.component.scss']
})
export class WebsiteBodyComponent implements OnInit {

  @Input() page_list_id: String;
  lists$: Observable<any>;
  constructor(private list_data_service: ListServiceService) { }

  ngOnInit() {
    this.list_data_service.getList(this.page_list_id).subscribe(
      data => {
        this.lists$ = data['sublists'];
    });
  }
}
