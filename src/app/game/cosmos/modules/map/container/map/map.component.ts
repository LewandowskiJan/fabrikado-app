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

import { Hexagon } from '../../model/hexagon';
import { HexagonFactory } from '../../model/hexagon.factory';

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
  public clickedHexagon: Hexagon | undefined;
  public hoverHexagon: Hexagon | undefined;

  @HostListener('click', ['$event'])
  public onClick(event: any): void {
    this.findPolygon(event)?.click();
  }

  @HostListener('mousemove', ['$event'])
  public onMouseHover(event: any): void {
    if (this.hoverHexagon) {
      this.hoverHexagon.unHover();
    }
    this.hoverHexagon = this.findPolygon(event);
    this.hoverHexagon?.hover();
  }

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

  private DOTS_AMOUNT: number = 0;
  private DOT_RADIUS: number = 0;
  private GLOBE_RADIUS: number = 0;
  private GLOBE_CENTER_Z: number = 0;
  private PROJECTION_CENTER_X: number = 0;
  private PROJECTION_CENTER_Y: number = 0;
  private FIELD_OF_VIEW: number = 0;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  public ngAfterViewChecked(): void {
    this.changeDetectorRef.detectChanges();
  }

  public ngAfterViewInit(): void {
    if (this.planetCanvas && this.mapBox) {
      this.context = this.planetCanvas.nativeElement.getContext('2d');
      this.setupConst();
      if (this.context) {
        this.hexagons = HexagonFactory.createAxialCoordinateSystem(
          4,
          this.planetCanvas,
          this.context
        );
        this.draw();
      }
    }
  }

  public ngOnDestroy(): void {
    this.animationFrameId && cancelAnimationFrame(this.animationFrameId);
  }

  private findPolygon(event: any): Hexagon | undefined {
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

  private setupConst() {
    this.DOTS_AMOUNT = 1000; // Amount of dots on the screen
    this.DOT_RADIUS = 4; // Radius of the dots
    this.GLOBE_RADIUS = this.width * 0.7; // Radius of the globe
    this.GLOBE_CENTER_Z = -this.GLOBE_RADIUS; // Z value of the globe center
    this.PROJECTION_CENTER_X = this.width / 2; // X center of the canvas HTML
    this.PROJECTION_CENTER_Y = this.height / 2; // Y center of the canvas HTML
    this.FIELD_OF_VIEW = this.width * 0.8;
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

      this.context.restore();
    }
  }
}
