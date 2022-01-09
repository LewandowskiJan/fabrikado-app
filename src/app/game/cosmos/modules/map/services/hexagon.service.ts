import { Injectable } from '@angular/core';

import { Hexagon } from '../model/hexagon';

@Injectable({
  providedIn: 'root',
})
export class HexagonService {

  public static findHexagonByAttribute(
    hexagons: Map<string, Hexagon>,
    hexagonName: string
  ): Hexagon | undefined {
    return hexagons.get(hexagonName);
  }
}
