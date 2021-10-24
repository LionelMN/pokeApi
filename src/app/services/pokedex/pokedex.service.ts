import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  url : string = "https://pokeapi.co/api/v2/pokemon"
  selectedGeneration : string = "?offset=0&limit=151";
  speciesUrl : string = "https://pokeapi.co/api/v2/pokemon-species";

  constructor(private http : HttpClient) { }

  public getAllPokemonOfGen() : Observable<any>{
    return this.http.get(`${this.url}${this.selectedGeneration}`) as Observable<any>;
  }

  public getAllPokemon() : Observable<any>{
    return this.http.get(`${this.url}?offset=0&limit=898`) as Observable<any>;
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

  public getEvolutionChain(url) : Observable<any> {
    return this.http.get(url) as Observable<any>
  }

  public getSpecies(id) : Observable<any> {
    return this.http.get(`${this.speciesUrl}/${id}`) as Observable<any>
  }

}
