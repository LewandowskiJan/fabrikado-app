import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CosmosService {
  public currentPlanetName: string = '';
  public planetsName: string[] = [];


}
