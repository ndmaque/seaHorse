import { Component } from '@angular/core';
import { boats } from './boats';

@Component({
  selector: 'app-boat-list',
  templateUrl: './boat-list.component.html',
})

export class BoatListComponent {
  boatList: any[] = boats;

  constructor() { }

  getBoats() {
    //name = name.trim();
    let boatList = boats ;
  }

}

