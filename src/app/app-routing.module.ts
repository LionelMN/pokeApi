import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexListComponent } from './views/pokedex-list/pokedex-list.component';
import { PokemonViewComponent } from './views/pokemon-view/pokemon-view.component';
import { ItemListComponent } from './views/item-list/item-list.component';
import { ItemViewComponent } from './views/item-view/item-view.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: 'pokemon'},
  {path: 'pokemon', component: PokedexListComponent},
  {path: 'pokemon/:id', component: PokemonViewComponent},
  {path: 'items', component: ItemListComponent},
  {path: 'item/:id', component: ItemViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
