import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlKoreanName: string = 'https://pokeapi.co/api/v2/pokemon-species';

  public pokemon: any;

  public isLoading: boolean = false;

  constructor( private activatedRouted: ActivatedRoute, private pokeApiService: PokeApiService){
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  public getPokemon(){
    const id = this.activatedRouted.snapshot.params['id']
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`)
    const koreanNamePokemon = this.pokeApiService.apiGetPokemons(`${this.urlKoreanName}/${id}`)

    return forkJoin([pokemon, koreanNamePokemon]).subscribe(
      response => {
        console.log(response)
        return this.pokemon = response
      } 
    )

  }

  
}
