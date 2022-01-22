import { ElementRef } from '@angular/core';

export class Planet {
  public canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public circle: Path2D | undefined;
  public size: number = 100;
  public x: number = 0;
  public y: number = 0;
  public lineWidth: number = 1;
  public clicked: boolean = false;
  public isSun: boolean = false;
  public image: HTMLImageElement | undefined;

  constructor(
    canvas: ElementRef<HTMLCanvasElement>,
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    isSun: boolean = false
  ) {
    this.x = x;
    this.y = y;
    this.canvas = canvas;
    this.ctx = ctx;
    this.isSun = isSun;

    this.image = new Image();

    this.isSun
      ? (this.image.src = './../../../../assets/models/sun-tiny.png')
      : (this.image.src = './../../../../assets/models/planet-type-1-tiny.png');
  }

  public hover(): void {
    this.lineWidth = 5;
  }

  public unHover(): void {
    this.lineWidth = 1;
  }

  public click(): void {
    this.clicked = !this.clicked;
  }

  public draw(x: number, y: number, size: number): void {
    this.x = x;
    this.y = y;
    this.image &&
      this.ctx.drawImage(
        this.image,
        this.x - (this.size * size) / 2,
        this.y - (this.size * size) / 2,
        this.size * size,
        this.size * size
      );
  }
}
