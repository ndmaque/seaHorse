import { Component } from '@angular/core';

@Component({
  selector: 'app-boat-list',
  template: `
    <h2>Boats</h2>

    <div *ngFor="let hero of ('assets/heroes.json' | fetch) ">
      {{hero.name}}
    </div>

    <p>Heroes as JSON:
      {{'assets/heroes.json' | fetch | json}}
    </p>`
})
export class BoatListComponent { }
