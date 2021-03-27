import { Component, OnInit } from '@angular/core';

import { PokedexI } from 'src/app/interfaces/pokedex-i';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.scss']
})
export class PokedexListComponent implements OnInit {

  constructor(private pokedexService : PokedexService) { }

  public currentPokedex : PokedexI[];
  private currentGenerationUrl : string;
  public isPokedexLoaded : boolean = false;
  public img : string;

  public getPokedexByGen(){
    this.pokedexService.getAllPokemon().subscribe(pokedex => {
      this.currentPokedex = pokedex.results;
      for (let i = 0; i < this.currentPokedex.length; i++) {
        this.pokedexService.getSinglePokemon(pokedex.results[i].url).subscribe(imgs => {
            this.currentPokedex[i].img = imgs.sprites.other.dream_world.front_default;
          })
        }
        this.isPokedexLoaded = true;
      })
  }

  ngOnInit(): void {
    this.getPokedexByGen();
    this.currentGenerationUrl = this.pokedexService.selectedGeneration;
  }

/*   ngDoCheck() : void {
    if(this.pokedexService.selectedGeneration !== this.pokedexService.url){
      this.getPokedexByGen();
    }
  } */

}
