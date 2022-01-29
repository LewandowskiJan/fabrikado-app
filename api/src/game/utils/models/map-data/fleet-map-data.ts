import { Clan } from './../enums/clan';
import { MoveDirection } from './../enums/move-direction';

export interface FleetMapData {
  id: string;
  position: {
    direction: MoveDirection;
    progress: number;
  };
  size: number;
  speed: number;
  isEnemyFleet: boolean;
  clan: Clan;
}
