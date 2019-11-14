import { Component, OnInit, Input } from '@angular/core';
import { ListServiceService } from '../list-service.service';
import { Item } from '../../models/item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousal-one-layouts',
  templateUrl: './carousal-one-layouts.component.html',
  styleUrls: ['./carousal-one-layouts.component.scss']
})
export class CarousalOneLayoutsComponent implements OnInit {

  @Input() public carousel_list_id;
  items$: Item[];
  constructor(private list_data_service: ListServiceService) { }

  ngOnInit() {
    console.log("-------1----------")
    this.list_data_service.getList(this.carousel_list_id).subscribe(

      data => {
        this.items$ = data['items'];
    });
    console.log("wassup")
  }

}
