import { Planet } from '@src/app/game/cosmos/modules/map/model/planet/planet';

export interface ElementsInsideHexagonData {
  planet?: Planet;
  fleet: any[];
  isBattle: boolean;
}
