import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vertical-cards-layouts',
  templateUrl: './vertical-cards-layouts.component.html',
  styleUrls: ['./vertical-cards-layouts.component.scss']
})
export class VerticalCardsLayoutsComponent implements OnInit {

  @Input() public carousel_list_id;
  items$: Object;

  constructor(private list_data_service: ListServiceService) { }

  ngOnInit() {
  
  this.list_data_service.getList(this.carousel_list_id).subscribe(
    data => {
      console.log(data['items'])
      this.items$ = data['items'];
  });
}

}