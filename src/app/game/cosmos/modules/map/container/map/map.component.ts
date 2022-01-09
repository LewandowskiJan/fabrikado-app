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

import { take } from 'rxjs/operators';

import { Hexagon } from '../../model/hexagon';
import { Path } from '../../model/path/path';
import { MouseHandlerService } from '../../services/mouse-service/mouse-handler.service';
import { GameMapData } from './../../../../../../domain/endpoints/map/game-map-data';
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

  public hoverHexagon: Hexagon | undefined;

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
    console.log('created');
  }

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    const hexagon: Hexagon | undefined = this.findHexagon(event);
    hexagon &&
      this.context &&
      this.mouseHandlerService.click(
        event,
        hexagon,
        this.context,
        this.hexagonMap,
        this.paths
      );
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
    if (this.planetCanvas && this.mapBox) {
      this.context = this.planetCanvas.nativeElement.getContext('2d');

      if (this.context) {
        this.mapService.getMapData();

        this.mapService.gameMap$
          .pipe(take(1))
          .subscribe((gameMap: GameMapData[]) => this.setupHexagons(gameMap));

        this.draw();
      }
    }
  }

  public ngOnDestroy(): void {
    this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
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

  private draw(): void {
    if (this.context) {
      this.context.save();
      this.context.clearRect(0, 0, this.width, this.height);

      this.animationFrameId = requestAnimationFrame(this.draw.bind(this));

      this.hexagons
        .sort((a: Hexagon, b: Hexagon) => (a.clicked ? -1 : 1))
        .forEach((octagon: Hexagon) => {
          octagon.drawMe();
        });

      this.paths.forEach((path: Path) => {
        path.pathsCoordinates.forEach(({ x, y }: { x: number; y: number }) => {
          const hex: Hexagon | undefined = this.hexagons.find(
            (hexagon: Hexagon) => {
              this.context?.isPointInPath(hexagon.polygonPath as any, x, y);
            }
          );
          // console.log(hex);
          hex && hex.click();
        });
        path.drawMe();
      });

      this.context.restore();
    }
  }
}
