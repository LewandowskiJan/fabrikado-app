import { ElementRef } from '@angular/core';

import { Attributes } from './position';

export class Hexagon {
  public canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public polygonPath: Path2D | undefined;
  public size: number = 100;
  public height: number = 0;
  public x: number = 0;
  public y: number = 0;
  public lineWidth: number = 1;
  public clicked: boolean = false;
  public attributes: Attributes;

  constructor(
    canvas: ElementRef<HTMLCanvasElement>,
    ctx: CanvasRenderingContext2D,
    attributes: Attributes
  ) {
    this.attributes = attributes;
    this.canvas = canvas;
    this.ctx = ctx;
    this.countHeight();
    this.calculatePosition();
  }

  private calculatePosition(): void {
    this.x = this.attributes.r * 1.5 * this.size + 1000;
    this.y =
      this.attributes.q * this.height - this.attributes.s * this.height + 1000;
  }

  public countHeight(): void {
    this.height = this.size * Math.cos(Math.PI / 6);
  }

  public hover(): void {
    this.lineWidth = 3;
  }

  public unHover(): void {
    this.lineWidth = 1;
  }

  public click(): void {
    this.clicked = !this.clicked;
  }

  public drawMe(): void {
    if (this.clicked) {
      this.size += this.size < 300 ? 10 : 0;
    } else {
      this.size -= this.size > 100 ? 10 : 0;
    }
    const numberOfSides: number = 6;

    this.polygonPath = new Path2D();

    this.ctx.beginPath();
    this.polygonPath.moveTo(
      this.x + this.size * Math.cos(0),
      this.y + this.size * Math.sin(0)
    );
    for (let i: number = 1; i <= numberOfSides; i += 1) {
      this.polygonPath.lineTo(
        this.x + this.size * Math.cos((i * 2 * Math.PI) / numberOfSides),
        this.y + this.size * Math.sin((i * 2 * Math.PI) / numberOfSides)
      );
    }
    this.ctx.strokeStyle = '#ffffff';
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke(this.polygonPath);
  }
}
