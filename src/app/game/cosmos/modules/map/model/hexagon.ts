import { ElementRef } from '@angular/core';

import { HexagonCoordinates } from './interfaces/hexagon-coordinates';
import { Planet } from './planet/planet';

export interface ElementsInsideHexagonData {
  planet?: Planet;
  fleet: any[];
  isBattle: boolean;
}

export interface Position {
  solarSystem?: string;
  galactic?: string;
  universe?: string;
}
export class Hexagon {
  public canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public polygonPath: Path2D | undefined;

  public position: Position;

  public name: string;
  public size: number = 60;
  public height: number = 0;
  public x: number = 0;
  public y: number = 0;
  public startPositionX: number = 100;
  public startPositionY: number = 100;
  public lineWidth: number = 1;
  public change: number = 0;
  public onBigger: boolean = false;

  public clicked: boolean = false;
  public onHover: boolean = false;
  public attributes: HexagonCoordinates;
  public elementsInside: ElementsInsideHexagonData = {
    isBattle: false,
    fleet: [],
  };

  public isGalactic: boolean = false;
  public isUniverse: boolean = false;

  constructor(
    canvas: ElementRef<HTMLCanvasElement>,
    ctx: CanvasRenderingContext2D,
    attributes: HexagonCoordinates,
    name: string,
    position: Position,
    isGalactic: boolean,
    isUniverse: boolean,
    elementInside?: any
  ) {
    this.name = name;
    this.attributes = attributes;
    this.canvas = canvas;
    this.ctx = ctx;
    this.position = position;
    this.isGalactic = isGalactic;
    this.isUniverse = isUniverse;

    const isSun: boolean =
      this.attributes.s === 0 &&
      this.attributes.r === 0 &&
      this.attributes.q === 0;

    if (isGalactic) {
      this.size = 100;
      this.isGalactic = true;
      this.elementsInside.planet = new Planet(
        canvas,
        ctx,
        this.x,
        this.y,
        isSun,
        isGalactic,
        isUniverse
      );
    }

    if (isUniverse) {
      this.size = 150;
      this.isUniverse = true;
      this.elementsInside.planet = new Planet(
        canvas,
        ctx,
        this.x,
        this.y,
        isSun,
        isGalactic,
        isUniverse
      );
    }

    this.countHeight();
    this.calculatePosition();
    // console.log(elementInside);

    if (elementInside.planet)
      this.elementsInside.planet = new Planet(
        canvas,
        ctx,
        this.x,
        this.y,
        isSun,
        false,
        false,
        elementInside.planet
      );
  }

  public calculatePosition(): void {
    this.x = this.attributes.r * 1.5 * this.size;
    this.y = this.attributes.q * this.height - this.attributes.s * this.height;
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

  public drawMe(
    startPositionX: number,
    startPositionY: number,
    sizeModifier: number
  ): void {
    this.polygonPath = new Path2D();
    if (this.onHover && !this.click) {
      this.lineWidth = 3;
    }
    if (this.clicked) {
      this.lineWidth = 4;
    } else if (!this.onHover) {
      this.lineWidth = 0.1;
      if (this.isGalactic) this.lineWidth = 0.5;
      if (this.isUniverse) this.lineWidth = 1;
    }

    const numberOfSides: number = 6;

    this.ctx.beginPath();
    this.polygonPath.moveTo(
      this.x * sizeModifier +
        startPositionX +
        (this.size * sizeModifier - this.change) * Math.cos(0),
      this.y * sizeModifier +
        startPositionY +
        (this.size * sizeModifier - this.change) * Math.sin(0)
    );
    for (let i: number = 1; i <= numberOfSides; i += 1) {
      this.polygonPath.lineTo(
        this.x * sizeModifier +
          startPositionX +
          (this.size * sizeModifier - this.change) *
            Math.cos((i * 2 * Math.PI) / numberOfSides),
        this.y * sizeModifier +
          startPositionY +
          (this.size * sizeModifier - this.change) *
            Math.sin((i * 2 * Math.PI) / numberOfSides)
      );
    }

    this.ctx.strokeStyle = '#009971';
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke(this.polygonPath);

    this.elementsInside.planet?.draw(
      this.x * sizeModifier + startPositionX,
      this.y * sizeModifier + startPositionY,
      sizeModifier
    );

    this.elementsInside.fleet.forEach((elem: Planet) =>
      elem.draw(
        this.x * sizeModifier + startPositionX,
        this.y * sizeModifier + startPositionY,
        sizeModifier
      )
    );
    this.ctx.font = '12px Arial';
    this.ctx.font = '1px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText(
      `q: ${this.attributes.q}, r: ${this.attributes.r}, s: ${
        this.attributes.s
      } ${
        Math.abs(this.attributes.q) +
        Math.abs(this.attributes.r) +
        Math.abs(this.attributes.s)
      }`,
      this.x + startPositionX - this.height / 2,
      this.y
    );
    this.ctx.restore();
  }

  private reSizeAnimation(): void {
    if (!this.onBigger && this.change <= this.size) {
      this.onBigger = this.change === this.size;
      this.change += 5;
    } else if (this.change > 0) {
      this.change -= 5;
    }
  }
}
