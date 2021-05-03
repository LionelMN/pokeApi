import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../../services/items/items.service';
import { ItemsI } from '../../interfaces/items-i';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(
    private itemsService : ItemsService,
    private route : ActivatedRoute
  ) { }

  public isContenLoaded : boolean = false;
  public items : ItemsI[] = [];
  public pokeballs : ItemsI[] = [];
  public medicines : ItemsI[] = [];
  public category : string;

  ngOnInit(): void {
    this.category = this.route.snapshot.queryParamMap.get('category');
    this.getAllItems()
  }

  ngDoCheck() : void {
    if(this.category !== this.route.snapshot.queryParamMap.get('category')){
      this.category = this.route.snapshot.queryParamMap.get('category');
    }
  }

  getAllItems(){
    this.itemsService.getAllItems().subscribe( items => {
      this.items = items.results;
      for (let i = 0; i < this.items.length; i++){
        this.itemsService.getItem(this.items[i].url).subscribe( item => {
          this.items[i].id = item.id;
          this.items[i].sprites = item.sprites.default;
          this.items[i].category = item.category;
          this.fillterItems(this.items[i])
        })
      }
      setTimeout( () => {
        this.isContenLoaded = true;
      }, 1000)
    })
  }

  fillterItems(itemRecived){
      if (itemRecived.category.name === 'status-cures' || itemRecived.category.name === 'healing' || itemRecived.category.name === 'revival' || itemRecived.category.name === 'pp-recovery'){
        this.medicines.push(itemRecived);
      }
      if (itemRecived.category.name === 'standard-balls' || itemRecived.category.name === 'special-balls' || itemRecived.category.name === 'apricorn-balls'){
        this.pokeballs.push(itemRecived);
      }
  }

}
