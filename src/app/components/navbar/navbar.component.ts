import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex/pokedex.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private pokedexService : PokedexService) { }

  public isHovered : boolean = false

  ngOnInit(): void {
  }

  public onHover() : void{
    this.isHovered = !this.isHovered;
  }

  public sendGeneration(generation) : void{
    this.pokedexService.selectedGeneration = generation;
  }

}
