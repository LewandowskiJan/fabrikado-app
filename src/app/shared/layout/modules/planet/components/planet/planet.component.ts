import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-planet-3d',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.scss'],
})
export class PlanetComponent {
  @Input() size: number = 200;
}
