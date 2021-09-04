import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random-letters',
  templateUrl: './random-letters.component.html',
  styleUrls: ['./random-letters.component.scss']
})
export class RandomLettersComponent implements OnInit {


  pokemon: string[];
  letrasPoke: any[] = [];

  constructor() { }

  ngOnInit(): void {
    //Prueba input Quiz pokemon
    const namePoke = 'charmander';

    this.pokemon = namePoke.split('');

    this.pokemon.map( letra => {
      const rand = Boolean(Math.round(Math.random()));
      const letraPoke = {
        name: letra,
        visible: rand
    }
    this.letrasPoke.push(letraPoke)

      console.log(letraPoke);


      return letraPoke;
    })
  }

}
