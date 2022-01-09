import { ElementRef } from '@angular/core';

import { HexagonCoordinates } from './interfaces/hexagon-coordinates';
import { Planet } from './planet/planet';

export class Hexagon {
  public canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public polygonPath: Path2D | undefined;

  public name: string;
  public size: number = 60;
  public height: number = 0;
  public x: number = 0;
  public y: number = 0;
  public startPositionX: number = 700;
  public startPositionY: number = 700;
  public lineWidth: number = 1;
  public clicked: boolean = false;
  public onHover: boolean = false;
  public attributes: HexagonCoordinates;
  public elementsInside: any[] = [];

  constructor(
    canvas: ElementRef<HTMLCanvasElement>,
    ctx: CanvasRenderingContext2D,
    attributes: HexagonCoordinates,
    name: string,
    elementInside?: any
  ) {
    this.name = name;
    this.attributes = attributes;
    this.canvas = canvas;
    this.ctx = ctx;
    this.countHeight();
    this.calculatePosition();
    if (
      this.attributes.s === 0 &&
      this.attributes.r === 0 &&
      this.attributes.q === 0
    ) {
      this.addPlanetToHexagon();
    }

    elementInside.length > 2 &&
      this.elementsInside.push(new Planet(canvas, ctx, this.x, this.y));
  }

  private calculatePosition(): void {
    this.x = this.attributes.r * 1.5 * this.size + this.startPositionX;
    this.y =
      this.attributes.q * this.height -
      this.attributes.s * this.height +
      this.startPositionY;
  }

  public countHeight(): void {
    this.height = this.size * Math.cos(Math.PI / 6);
  }

  public hover(): void {
    this.onHover = true;
    this.lineWidth = 3;
  }

  public unHover(): void {
    this.onHover = false;
    this.lineWidth = 1;
  }

  public click(): void {
    this.clicked = !this.clicked;
  }

  public drawMe(): void {
    if (this.onHover && !this.click) {
      this.lineWidth = 3;
    }
    if (this.clicked) {
      this.lineWidth = 4;
      // this.size += this.size < 300 ? 10 : 0;
    } else if (!this.onHover) {
      this.lineWidth = 0.3;
      // this.size -= this.size > 100 ? 10 : 0;
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

    this.ctx.strokeStyle = '#009971';
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke(this.polygonPath);
    this.elementsInside.forEach((elem: Planet) => elem.draw(this.clicked));
    this.ctx.font = '12px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText(
      `q: ${this.attributes.q}, r: ${this.attributes.r}, s: ${
        this.attributes.s
      } ${
        Math.abs(this.attributes.q) +
        Math.abs(this.attributes.r) +
        Math.abs(this.attributes.s)
      }`,
      this.x - this.height / 2,
      this.y
    );
  }

  private addPlanetToHexagon(): void {
    const planet: Planet = new Planet(this.canvas, this.ctx, this.x, this.y);
    this.elementsInside.push(planet);
  }
}
