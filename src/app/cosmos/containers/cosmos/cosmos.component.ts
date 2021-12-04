import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cosmos',
  templateUrl: './cosmos.component.html',
  styleUrls: ['./cosmos.component.scss'],
})
export class CosmosComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  makesound(): void {
    const a: any = new Audio('./../../../../assets/explosion6.ogg');
    a.play();
  }
}
