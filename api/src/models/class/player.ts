import { Planet, Planets } from './planet';

export class Player {
  planets: Planets = [];

  constructor() {
    this.planets.push(new Planet());
  }
  public updateData(): void {
    // this.planets.forEach((planet: Planet) => new Planet(planet.data()));
  }
}
