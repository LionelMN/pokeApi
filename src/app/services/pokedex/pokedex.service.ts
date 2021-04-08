import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

import { PokemonI } from 'src/app/interfaces/pokemon-i';
import { PokedexI } from 'src/app/interfaces/pokedex-i';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  url : string = "https://pokeapi.co/api/v2/pokemon"
  selectedGeneration : string = "?offset=0&limit=151";

  constructor(private http : HttpClient) { }

  public getAllPokemon() : Observable<any>{
    return this.http.get(`${this.url}${this.selectedGeneration}`) as Observable<any>;
  }

  public getSinglePokemon(singlePokemonUrl) : Observable<any>{
    return this.http.get(`${singlePokemonUrl}`) as Observable<any>;
  }

  public getSinglePokemonById(id) : Observable<any>{
    return this.http.get(`${this.url}/${id}`) as Observable<any>;
  }

  public getVersions() : Observable<any>{
    return this.http.get('https://pokeapi.co/api/v2/version-group/') as Observable<any>
  }
}
