import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonI } from 'src/app/interfaces/pokemon-i';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss', 'tableSprites.scss'],
})
export class PokemonViewComponent implements OnInit {

  constructor(
    private pokedexService : PokedexService,
    private route : ActivatedRoute
    ) { }

  private urlId : string;
  public pokemon : PokemonI;
  public isContentLoaded : boolean = false;
  public versions : {name : string, url : string}[] = []
  public isMovesTableHide : boolean = false;

  //Pagination
  config : any;
  moves : [];


  ngOnInit(): void {
    this.urlId = this.route.snapshot.paramMap.get('id')
    this.getPokemon(this.urlId)
    this.getVersions()
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  getPokemon(id){
    this.isContentLoaded = false;
    this.pokedexService.getSinglePokemonById(id).subscribe( pokemon => {
      this.pokemon = pokemon;
      this.moves = pokemon.moves;
      this.config = {
        itemsPerPage: 10,
        currentPage: 1,
        totalItems: this.moves.length
      }
      this.getSpecies(id)
    })
  }

  getVersions(){
    this.pokedexService.getVersions().subscribe (versions => {
      this.versions = versions.results
    })
  }

  getSpecies(id){
    this.pokedexService.getSpecies(id).subscribe(specie => {
      this.pokemon.species = specie;
      this.getEvolutionChain(specie.evolution_chain.url)
    })
  }

  getEvolutionChain(url) {
    this.pokedexService.getEvolutionChain(url).subscribe(chain => {
      this.pokemon.evolution_chain = chain;
      let reg = chain.chain.species.url;
      var regex = /\d+/g;
      var matches = reg.match(regex);  // creates array from matches
      this.pokemon.evolution_chain.chain.stage1Id = matches[1];
      for (let i = 0; i < this.pokemon.evolution_chain.chain.evolves_to.length; i++){
        let reg = this.pokemon.evolution_chain.chain.evolves_to[i].species.url
        var regex = /\d+/g;
        var matches : any = reg.match(regex);  // creates array from matches
        this.pokemon.evolution_chain.chain.evolves_to[i].stage2Id = matches[1];
        if (this.pokemon.evolution_chain.chain.evolves_to[i].evolves_to.length !== 0){
          for (let j = 0; j < this.pokemon.evolution_chain.chain.evolves_to[i].evolves_to.length; j++){
            let reg = this.pokemon.evolution_chain.chain.evolves_to[i].evolves_to[j].species.url
            var regex = /\d+/g;
            var matches : any = reg.match(regex);  // creates array from matches
            this.pokemon.evolution_chain.chain.evolves_to[i].evolves_to[j].stage3Id = matches[1];
          }
        }
      }
      this.isContentLoaded = true;
    })
  }

}
