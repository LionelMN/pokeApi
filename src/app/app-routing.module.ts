import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokedexListComponent } from './views/pokedex-list/pokedex-list.component';
import { PokemonViewComponent } from './views/pokemon-view/pokemon-view.component';

const routes: Routes = [
  {path: '', component: PokedexListComponent},
  {path: 'pokemon/:id', component: PokemonViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
