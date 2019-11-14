import { Component, OnInit } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  lists$: List[];
  page_list_id = '';
  constructor(private list_data_service: ListServiceService) {
  }

  ngOnInit() {
    this.list_data_service.getMenuLists().subscribe(
      data => {
        this.lists$ = data['sublists'];
        this.page_list_id = this.lists$[0].slug;
    });
  }

}
