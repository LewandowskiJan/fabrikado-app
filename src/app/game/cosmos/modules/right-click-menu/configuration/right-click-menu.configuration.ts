import { RightClickMenuModel } from '../model/right-click-menu.model';
import { RightClickMenuEvent } from '../model/right-click-menu-event';
import { RightClickMenuType } from '../model/right-click-menu-type';

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
