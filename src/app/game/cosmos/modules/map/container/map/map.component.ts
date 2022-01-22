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
import { take, tap } from 'rxjs/operators';

import { FleetMapObject, FleetSprite } from '../../model/fleet/fleet';
import { Hexagon } from '../../model/hexagon';
import { Path } from '../../model/path/path';
import { MouseHandlerService } from '../../services/mouse-service/mouse-handler.service';
import { GameMapData } from './../../../../../../domain/endpoints/map/game-map-data';
import { SpecialMapObject } from './../../model/special-map-object/special-map-object';
import { MapService } from './../../services/map.service';

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

  public startPositionX: number = 400;
  public startPositionY: number = 400;
  public size: number = 1;

  public hexagons: Hexagon[] = [];
  public hexagonMap: Map<string, Hexagon> = new Map([]);

  public paths: any[] = [];
  public specialSubscription: Subscription | undefined;

  public specialMapObjects: any[] = [];
  public fleetMapObjects: any[] = [];

  public hoverHexagon: Hexagon | undefined;

  public onHold: boolean = false;
  public onDrag: boolean = false;

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
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.mouseHandlerService.clear();
  }

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    if (this.onHold && this.onDrag) return;
    console.log('a');
    const hexagon: Hexagon | undefined = this.findHexagon(event);
    console.log('b');
    if (this.context && hexagon) {
      console.log('c');
      this.mouseHandlerService.click(
        event,
        hexagon,
        this.context,
        this.hexagonMap,
        this.paths
      );
    }
    console.log('d');
  }

  public onMouseWheel(event: any): void {
    if (event.wheelDelta / 120 > 0) {
      if (this.size >= 1.5) return;
      this.size = Number((this.size + 0.1).toFixed(2));
    } else {
      if (this.size <= 0.5) return;
      this.size = Number((this.size - 0.1).toFixed(2));
    }
  }

  public move(event: any): void {
    if (this.onHold) {
      this.onDrag = true;
      this.startPositionX -= event.movementX;
      this.startPositionY -= event.movementY;
    }
  }

  public hold(): void {
    this.onHold = true;
  }

  public leave(): void {
    this.onHold = false;
    this.onDrag = false;
  }

  public mouseLeave(): void {
    this.onHold = false;
  }

  @HostListener('document:mousemove', ['$event'])
  public onMouseDown(event: any): any {
    // we make sure only draggables on the document elements are selected
    if (event.target.getAttribute('draggable')) {
      console.log('mousedown');

      const currentX: number = event.clientX;
      const currentY: number = event.clientY;
      const selectedElement: any = event.target;
      console.log(currentX, ': ', currentY);
      // ##### add this code.
      // event.preventDefault(); // choose one
      // ##### or add this code.
      return false; // choose one
    }
  }

  @HostListener('mousemove', ['$event'])
  public onMouseHover(event: any): void {
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

        this.draw();
      }
    }
  }

  public ngOnDestroy(): void {
    this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
    this.specialSubscription?.unsubscribe();
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
        this.timer = 0;
      }
    } else {
      this.timer += deltaTime;
    }

    this.animationFrameId = requestAnimationFrame(this.draw.bind(this));
  }
}
