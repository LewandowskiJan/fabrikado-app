import { Component } from '@angular/core';


@Component({
  selector: 'app-galaxy-table',
  templateUrl: './galaxy-table.component.html',
  styleUrls: ['./galaxy-table.component.scss'],
})
export class GalaxyTableComponent {

public createRange() {
    const items: number[] = [];
    for(let i:number = 1; i <= 15; i++){
       items.push(i);
     }
     return items;
  }
}
