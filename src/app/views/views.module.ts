import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';
import { AppRoutingModule } from '../app-routing.module';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemViewComponent } from './item-view/item-view.component';



@NgModule({
  declarations: [PokedexListComponent, PokemonViewComponent, ItemListComponent, ItemViewComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
  ],
  exports: [
    PokedexListComponent,
    PokemonViewComponent,
    HttpClientModule,
  ]
})
export class ViewsModule { }
