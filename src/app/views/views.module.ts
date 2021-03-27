import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [PokedexListComponent],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PokedexListComponent,
    HttpClientModule,
  ]
})
export class ViewsModule { }
