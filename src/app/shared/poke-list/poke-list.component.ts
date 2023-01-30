import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public getAllPokemons: any;
  private getPokemon: any;

  constructor(private pokeApiService: PokeApiService){

  }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(res => {
      this.getAllPokemons = res.results;
      this.getPokemon = this.getAllPokemons
      console.log(this.getAllPokemons)
    });
  }

  public pokemonFilterList(value: string) {
    const filter = this.getPokemon.filter( (pokemon: any) => {
      return !pokemon.name.indexOf(value.toLocaleLowerCase())
    })

    this.getAllPokemons = filter
  }

}
