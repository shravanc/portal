import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-gallery-one',
  templateUrl: './gallery-one.component.html',
  styleUrls: ['./gallery-one.component.scss']
})
export class GalleryOneComponent implements OnInit {

  @Input() public carousel_list_id;
  items$: Object;

  constructor(private list_data_service: ListServiceService) { }

  ngOnInit() {
    this.list_data_service.getList(this.carousel_list_id).subscribe(
      data => {
        this.items$ = data['items'];
    });
  }

}