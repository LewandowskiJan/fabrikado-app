import {
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  ViewChild,
} from '@angular/core';

import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { FleetMapObject, FleetSprite } from '../../model/fleet/fleet';
import { Hexagon } from '../../model/hexagon';
import { Path } from '../../model/path/path';
import { MouseHandlerService } from '../../services/mouse-service/mouse-handler.service';
import { RightClickService } from '../../services/right-click/right-click.service';
import { KeyboardCode } from '../configuration/keyboard.config';
import { ContextMenuModel } from '../context-menu/context-menu.component';
import { GameMapData } from './../../../../../../domain/endpoints/map/game-map-data';
import { HotKeyPanel } from './../../model/hot-key-panel/hot-key-panel';
import { SpecialMapObject } from './../../model/special-map-object/special-map-object';
import { MapService } from './../../services/map.service';
import { MouseButton } from './../../services/mouse-service/mouse-handler.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent
  implements AfterViewInit, OnDestroy, AfterViewChecked
{
  public width: number = 2000;
  public height: number = 2000;

  public startPositionX: number = 600;
  public startPositionY: number = 600;
  public size: number = 1;

  public hexagons: Hexagon[] = [];
  public hexagonMap: Map<string, Hexagon> = new Map([]);

  public hotKeysPanel: HotKeyPanel | undefined;
  public paths: any[] = [];
  public specialSubscription: Subscription | undefined;

  public specialMapObjects: any[] = [];
  public fleetMapObjects: any[] = [];

  public hoverHexagon: Hexagon | undefined;

  public onHold: boolean = false;
  public onDrag: boolean = false;
  public onLeftCtrl: boolean = false;

  public isDisplayContextMenu: boolean = false;
  public contextMenuContent: ContextMenuModel[] = [];
  public contextMenuStyle: any;

  public lastTime: number = 0;
  public interval: number = 1000 / 60;
  public timer: number = 0;

  @ViewChild('mapBox', { static: false }) public mapBox:
    | ElementRef<HTMLDivElement>
    | undefined
    | any;

  @ViewChild('mapCanvas', { static: false }) public planetCanvas:
    | ElementRef<HTMLCanvasElement>
    | undefined
    | any;
  public context: CanvasRenderingContext2D | undefined | null;

  public rotation: number = 0;

  private animationFrameId: number | undefined;

  constructor(
    private mapService: MapService,
    private mouseHandlerService: MouseHandlerService,
    private rightClickService: RightClickService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.mouseHandlerService.clear();
  }

  public handleMenuItemClick(event: any): void {
    this.rightClickService.handleMenuItemClick(event);
    this.isDisplayContextMenu = false;
  }

  @HostListener('contextmenu', ['$event'])
  public contextmenu(event: any): void {
    event.preventDefault();
    if (event.button === MouseButton.RIGHT) {
      this.isDisplayContextMenu = true;
      this.rightClickService.displayContextMenu(event);
      this.contextMenuContent = this.rightClickService.getMenuItems();
      this.contextMenuStyle = this.rightClickService.getRightClickMenuStyle();
    }
  }

  @HostListener('mousedown', ['$event'])
  public onClick(event: any): void {
    if (this.isDisplayContextMenu) {
      return;
    }
    if (event.button === MouseButton.LEFT) {
      this.onHold = true;
      if ((this.onHold && this.onDrag) || this.onLeftCtrl) return;
      const hexagon: Hexagon | undefined = this.findHexagon(event);
      console.log(hexagon);

      if (hexagon && hexagon.isGalactic && hexagon.position.solarSystem) {
        this.navigateToNextSolarSystem(hexagon.position.solarSystem);
        return;
      }

      if (hexagon && hexagon.isUniverse && hexagon.position.galactic) {
        this.navigateToNextSolarSystem(hexagon.position.galactic);
        return;
      }

      if (this.context && hexagon) {
        this.mouseHandlerService.click(
          event,
          hexagon,
          this.context,
          this.hexagonMap,
          this.paths
        );
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  public onKeyDown(event: any): void {
    if (event.code === KeyboardCode.LEFT_CTRL) {
      this.isDisplayContextMenu = false;
      this.onLeftCtrl = event.ctrlKey;
    }
  }

  @HostListener('document:keyup', ['$event'])
  public onKeyUp(event: any): void {
    if (event.code === KeyboardCode.LEFT_CTRL) {
      this.onLeftCtrl = event.ctrlKey;
    }
  }

  @HostListener('mousemove', ['$event'])
  public onMouseHover(event: any): void {
    if (this.onHold && this.onLeftCtrl) {
      this.onDrag = true;
      this.startPositionX -= event.movementX;
      this.startPositionY -= event.movementY;
      return;
    }

    if (this.hoverHexagon) {
      this.hoverHexagon.unHover();
    }
    this.hoverHexagon = this.findHexagon(event);

    this.hoverHexagon?.hover();
  }

  public ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  public ngAfterViewInit(): void {
    if (this.planetCanvas) {
      this.context = this.planetCanvas.nativeElement.getContext('2d');

      if (this.context) {
        this.mapService.getMapData();

        this.mapService
          .getGameMapListener()
          .pipe(take(1))
          .subscribe((gameMap: GameMapData[]) => this.setupHexagons(gameMap));

        const fleet: FleetMapObject = new FleetMapObject(
          this.planetCanvas,
          this.context
        );

        fleet.setupPosition(100, 100, FleetSprite.BOTTOM_RIGHT);
        this.fleetMapObjects.push(fleet);
        const special: SpecialMapObject = new SpecialMapObject(
          this.planetCanvas,
          this.context
        );

        this.specialMapObjects.push(special);
        let frame: number = 1;

        this.specialSubscription = this.mapService
          .getSpecialMapObjectListener()
          .subscribe((specialData: any) => {
            if (frame === 5) frame = 1;
            special.setupPosition(specialData.x, specialData.y, frame++);
          });

        this.hotKeysPanel = new HotKeyPanel(this.planetCanvas, this.context);

        this.startPositionX = this.mapBox.nativeElement.offsetWidth / 2;
        this.startPositionY = this.mapBox.nativeElement.offsetHeight / 2;
        this.draw();
      }
    }
  }

  public ngOnDestroy(): void {
    this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
    this.specialSubscription?.unsubscribe();
  }

  public onMouseWheel(event: any): void {
    if (event.wheelDelta / 120 > 0) {
      if (this.size >= 1.5) return;
      this.size = Number((this.size + 0.1).toFixed(2));
    } else {
      if (this.size <= 0.5) {
        this.navigateUnder();
        return;
      }
      this.size = Number((this.size - 0.1).toFixed(2));
    }
  }

  private navigateUnder(): void {
    const hexagon: Hexagon = this.hexagons[0];

    if (hexagon.position.galactic && hexagon.position.universe) {
      if (hexagon.isGalactic) {
        this.navigateToNextSolarSystem(hexagon.position.universe);
        this.size = 1.5;
      }
      if (!hexagon.isGalactic && !hexagon.isUniverse) {
        this.navigateToNextSolarSystem(hexagon.position.galactic);
        this.size = 1.5;
      }
    }
  }

  public onMousePressHold(): void {
    this.isDisplayContextMenu = false;
    this.onHold = true;
  }

  public onMousePressLeave(): void {
    this.onHold = false;
    this.onDrag = false;
  }

  public onMouseCanvasOut(): void {
    this.onHold = false;
  }

  public navigateToNextSolarSystem(position: string): void {
    this.mapService.getMapData(position);
    this.mapService
      .getGameMapListener()
      .pipe(take(1))
      .subscribe((gameMap: GameMapData[]) => this.setupHexagons(gameMap));
  }

  private setupHexagons(gameMap: GameMapData[]): void {
    this.hexagons = [];
    this.hexagonMap.clear();
    gameMap.forEach((gameMapData: GameMapData) => {
      if (this.context) {
        const hexagon: Hexagon = new Hexagon(
          this.planetCanvas,
          this.context,
          gameMapData.attributes,
          gameMapData.name,
          {
            solarSystem: gameMapData.solarSystem,
            galactic: gameMapData.galactic,
            universe: gameMapData.universe,
          },
          gameMapData.isGalactic,
          gameMapData.isUniverse,
          gameMapData.elementsInside
        );
        this.hexagons.push(hexagon);
        this.hexagonMap.set(hexagon.name, hexagon);
      }
    });
  }

  private findHexagon(event: any): Hexagon | undefined {
    return this.hexagons.find((polygon: Hexagon) => {
      return (
        polygon?.polygonPath &&
        this.context?.isPointInPath(
          polygon.polygonPath,
          event.offsetX,
          event.offsetY
        )
      );
    });
  }

  private draw(timeStamp: number = 0): void {
    const deltaTime: number = timeStamp - this.lastTime;
    this.lastTime = timeStamp;

    if (this.timer > this.interval) {
      if (this.context) {
        this.context.clearRect(0, 0, this.width, this.height);

        this.hexagons.forEach((hexagon: Hexagon) => {
          hexagon.drawMe(this.startPositionX, this.startPositionY, this.size);
        });

        this.specialMapObjects.forEach((sp: SpecialMapObject) => sp.draw());
        this.fleetMapObjects.forEach((sp: FleetMapObject) => sp.draw());

        this.paths.forEach((path: Path) => {
          path.pathsCoordinates.forEach(
            ({ x, y }: { x: number; y: number }) => {
              const hex: Hexagon | undefined = this.hexagons.find(
                (hexagon: Hexagon) => {
                  this.context?.isPointInPath(hexagon.polygonPath as any, x, y);
                }
              );

              hex && hex.click();
            }
          );
          path.drawMe();
        });

        this.hotKeysPanel?.drawMe();
        this.timer = 0;
      }
    } else {
      this.timer += deltaTime;
    }
    this.animationFrameId = requestAnimationFrame(this.draw.bind(this));
  }
}
