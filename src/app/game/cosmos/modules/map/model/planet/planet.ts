import { ElementRef } from '@angular/core';

export class Planet {
  public canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public circle: Path2D | undefined;
  public size: number = 20;
  public x: number = 0;
  public y: number = 0;
  public lineWidth: number = 1;
  public clicked: boolean = false;
  public isSun: boolean = false;

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

  public draw(isClicked: boolean = false): void {
    // if (isClicked) {
    //   this.size += this.size < 120 ? 5 : 0;
    // } else {
    //   this.size -= this.size > 20 ? 5 : 0;
    // }

    const image: HTMLImageElement = new Image();

    this.isSun
      ? (image.src = './../../../../assets/models/sun-tiny.png')
      : (image.src = './../../../../assets/models/planet-type-1-tiny.png');

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

    // this.ctx.strokeStyle = '#ffffff';
    // this.ctx.lineWidth = this.lineWidth;
    // this.ctx.stroke(this.circle);
  }
}
