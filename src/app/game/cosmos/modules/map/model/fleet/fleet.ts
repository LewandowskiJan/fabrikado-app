import { ElementRef } from '@angular/core';

import { FleetSprite } from '@models/enums/fleet-sprite';

const fleetSpriteConfiguration: Map<
  FleetSprite,
  { column: number; row: number }
> = new Map([
  [FleetSprite.TOP_RIGHT, { column: 1, row: 1 }],
  [FleetSprite.TOP, { column: 0, row: 2 }],
  [FleetSprite.TOP_LEFT, { column: 1, row: 2 }],
  [FleetSprite.LEFT, { column: 2, row: 0 }],
  [FleetSprite.RIGHT, { column: 0, row: 1 }],
  [FleetSprite.BOTTOM_RIGHT, { column: 1, row: 0 }],
  [FleetSprite.BOTTOM, { column: 0, row: 0 }],
  [FleetSprite.BOTTOM_LEFT, { column: 2, row: 1 }],
]);

export class FleetMapObject {
  public canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public circle: Path2D | undefined;
  public x: number | undefined;
  public y: number | undefined;
  public size: number = 5;
  public lineWidth: number = 5;
  public clicked: boolean = false;
  public frameWidth: number = 402;
  public frameHeight: number = 279;
  public frame: FleetSprite = FleetSprite.TOP;
  public image: HTMLImageElement;

  constructor(
    canvas: ElementRef<HTMLCanvasElement>,
    ctx: CanvasRenderingContext2D
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = new Image();
    this.image.src = './../../../../assets/models/fleet/fleet-sprite.png';
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

  public setupPosition(x: number, y: number, frame: FleetSprite): void {
    this.frame = frame;
    this.x = x;
    this.y = y;
  }

  public draw(x: number, y: number, size: number): void {
    this.x = x;
    this.y = y;
    if (!this.x || !this.y) {
      return;
    }

    const column: number | undefined = fleetSpriteConfiguration.get(
      this.frame
    )?.column;
    const row: number | undefined = fleetSpriteConfiguration.get(
      this.frame
    )?.row;

    if (column !== undefined && row !== undefined) {
      this.ctx.drawImage(
        this.image,
        column * this.frameWidth,
        row * this.frameHeight,
        this.frameWidth,
        this.frameHeight,
        this.x - ((this.frameWidth / 7) * size) / 2,
        this.y - ((this.frameHeight / 7) * size) / 2,
        (this.frameWidth / 7) * size,
        (this.frameHeight / 7) * size
      );
    }
  }
}
