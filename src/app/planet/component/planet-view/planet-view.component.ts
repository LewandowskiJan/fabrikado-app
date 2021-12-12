import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { Sphere } from './../../model/sphere';
import { Texture } from './../../model/texture';

@Component({
  selector: 'app-planet-view',
  templateUrl: './planet-view.component.html',
  styleUrls: ['./planet-view.component.scss'],
})
export class PlanetViewComponent implements AfterViewInit {
  @ViewChild('planetCanvas', { static: false }) public planetCanvas:
    | ElementRef<HTMLCanvasElement>
    | undefined
    | any;
  public context: CanvasRenderingContext2D | undefined | null;

  public width: number = 400;
  public height: number = 400;
  public rotation: number = 0;
  public dots: any[] = [];

  public sphere: Sphere | undefined;

  public texture: Texture | undefined;
  public texture1: Texture | undefined;

  private DOTS_AMOUNT: number = 0;
  private DOT_RADIUS: number = 0;
  private GLOBE_RADIUS: number = 0;
  private GLOBE_CENTER_Z: number = 0;
  private PROJECTION_CENTER_X: number = 0;
  private PROJECTION_CENTER_Y: number = 0;
  private FIELD_OF_VIEW: number = 0;

  ngAfterViewInit(): void {
    if (this.planetCanvas) {
      this.context = this.planetCanvas.nativeElement.getContext('2d');
      this.setupCanvas();
      this.setupConst();
      if (this.context) {
        this.sphere = new Sphere(this.context);

        this.texture1 = new Texture(
          this.width / 2,
          this.height / 2,
          3,
          this.context
        );

        this.texture = new Texture(
          this.width / 2,
          this.height / 2,
          3,
          this.context
        );
        this.draw();
      }
    }
  }

  private setupCanvas(): void {
    this.width = this.planetCanvas?.nativeElement.clientWidth;
    this.height = this.planetCanvas?.nativeElement.clientHeight;
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
    if (this.context && this.sphere && this.texture1) {
      requestAnimationFrame(this.draw.bind(this));
      this.context.save();
      this.context.clearRect(0, 0, this.width, this.height);
      this.texture?.draw(this.width, this.height);
      this.texture1.draw(this.width, this.height, true);
      this.sphere.draw(this.width, this.height);

      this.context.restore();
      this.texture1.update(true);
      this.texture?.update();

      this.sphere.update();
    }
  }
}
