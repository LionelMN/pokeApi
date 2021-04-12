import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { PokedexI } from '../../interfaces/pokedex-i';
import { PokedexService } from '../../services/pokedex/pokedex.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor(
    private pokedexService : PokedexService,
    @Inject(DOCUMENT) private document: Document
  ) { }

  public search : string = "";
  public isSearchActive : boolean = false;
  public searchCategory : string = 'pokemon';
  private allPokemons : PokedexI[] = [];
  public filteredPokemons : PokedexI[] = [];

  ngOnInit(): void {
    this.getPokedex()
  }

  getPokedex(){
    this.pokedexService.getAllPokemon().subscribe(pokemon => {
      this.allPokemons = pokemon.results;
    })
  }

  onActivateSearch(){
    this.isSearchActive = true;
  }

  onDeactivateSearch(){
    setTimeout( () => {
      this.isSearchActive = false;
    }, 500)
  }

  filterItems(string){
    string = string.toLowerCase()
    if (this.searchCategory === "pokemon"){
      this.filteredPokemons = this.allPokemons;
      this.filteredPokemons = this.allPokemons.filter( pokemons => pokemons.name.includes(string));
    }
  }

  selectSuggestion(suggestedOption) {
    this.search = suggestedOption;
  }

  public reloadPage(input){
    input = input.toLowerCase()
    this.search = "";
    this.document.location.replace(`pokemon/${input}`);
  }

}
