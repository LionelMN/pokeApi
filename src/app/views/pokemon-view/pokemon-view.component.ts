import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonI } from 'src/app/interfaces/pokemon-i';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {

  constructor(
    private pokedexService : PokedexService,
    private route : ActivatedRoute
    ) { }

  private urlId : string;
  public pokemon : PokemonI;
  public isContentLoaded : boolean = false;

  ngOnInit(): void {
    this.urlId = this.route.snapshot.paramMap.get('id')
    this.getPokemon(this.urlId)
  }

  getPokemon(id){
    this.pokedexService.getSinglePokemonById(id).subscribe( pokemon => {
      this.pokemon = pokemon;
      this.isContentLoaded = true;
      console.log(this.pokemon)
      console.log(pokemon)
    })
  }

}
