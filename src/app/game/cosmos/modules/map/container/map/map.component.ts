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

  public hexagons: Hexagon[] = [];
  public hexagonMap: Map<string, Hexagon> = new Map([]);

  public paths: any[] = [];
  public specialSubscription: Subscription | undefined;

  public specialMapObjects: any[] = [];
  public fleetMapObjects: any[] = [];

  public hoverHexagon: Hexagon | undefined;

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
    const hexagon: Hexagon | undefined = this.findHexagon(event);
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

  private setupHexagons(gameMap: GameMapData[]): void {
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
          hexagon.drawMe();
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
