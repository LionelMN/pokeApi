import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsI } from '../../interfaces/items-i';
import { ItemsService } from '../../services/items/items.service';

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  constructor(
    private itemsService : ItemsService,
    private route : ActivatedRoute
  ) { }

  private urlId : string;
  public item : ItemsI;
  public isContentLoaded : boolean = false;

  ngOnInit(): void {
    this.urlId = this.route.snapshot.paramMap.get('id');
    this.getItem(this.urlId);
  }

  getItem(id){
    this.itemsService.getItem(`https://pokeapi.co/api/v2/item/${id}`).subscribe( item => {
      this.item = item;
      this.isContentLoaded = true;
    })
  }

}
