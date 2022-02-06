import { RightClickMenuEvent } from '@models/enums/right-click-menu-event';
import { RightClickMenuType } from '@models/enums/right-click-menu-type';
import { RightClickMenuModel } from '@models/interfaces/game/game-map/right-click-menu.model';

export const rightClickMenuConfiguration: Map<
  RightClickMenuType,
  RightClickMenuModel[]
> = new Map([
  [
    RightClickMenuType.ON_PLANET_FLEET,
    [
      { menuText: 'planet', menuEvent: RightClickMenuEvent.PLANET_OPTION },
      { menuText: 'fleet', menuEvent: RightClickMenuEvent.FLEET_OPTION },
      { menuText: 'research', menuEvent: RightClickMenuEvent.RESEARCH },
    ],
  ],
  [
    RightClickMenuType.ON_PLANET,
    [
      { menuText: 'planet', menuEvent: RightClickMenuEvent.PLANET_OPTION },
      { menuText: 'research', menuEvent: RightClickMenuEvent.RESEARCH },
    ],
  ],
  [
    RightClickMenuType.ON_FLEET,
    [
      { menuText: 'fleet', menuEvent: RightClickMenuEvent.FLEET_OPTION },
      { menuText: 'research', menuEvent: RightClickMenuEvent.RESEARCH },
    ],
  ],
  [
    RightClickMenuType.ON_EMPTY_HEXAGON,
    [{ menuText: 'research', menuEvent: RightClickMenuEvent.RESEARCH }],
  ],
  [
    RightClickMenuType.OUTSIDE_MAP,
    [{ menuText: 'research', menuEvent: RightClickMenuEvent.RESEARCH }],
  ],
]);
