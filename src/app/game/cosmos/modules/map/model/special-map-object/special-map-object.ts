import { ElementRef } from '@angular/core';

export class SpecialMapObject {
  public canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public circle: Path2D | undefined;
  public x: number | undefined;
  public y: number | undefined;
  public size: number = 5;
  public lineWidth: number = 5;
  public clicked: boolean = false;
  public frame: number = 1;

  constructor(
    canvas: ElementRef<HTMLCanvasElement>,
    ctx: CanvasRenderingContext2D,
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
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

  public setupPosition(x: number, y: number, frame:number): void {
    this.x = x;
    this.y = y;
    this.frame = frame
  }

  public draw(): void {
    if (!this.x || !this.y) {
      return;
    }

    const image: HTMLImageElement = new Image();

    image.src = `./../../../../assets/models/meteor-${this.frame}.png`;

    this.ctx.drawImage(
      image,
      this.x - (this.size * 5) / 2,
      this.y - (this.size * 5) / 2,
      this.size * 5,
      this.size * 5
    );
    // this.circle = new Path2D();

    // this.ctx.beginPath();

    // this.circle.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    // this.circle.bezierCurveTo(
    //   this.x - 10,
    //   this.y - 10,
    //   this.x,
    //   this.y,
    //   this.x,
    //   this.y + 2
    // );
    // this.circle.bezierCurveTo(
    //   this.x - 20,
    //   this.y - 20,
    //   this.x,
    //   this.y,
    //   this.x,
    //   this.y - 2
    // );

    // this.ctx.strokeStyle = '#37a2b8';
    // this.ctx.lineWidth = this.lineWidth;
    // this.ctx.stroke(this.circle);
  }
}