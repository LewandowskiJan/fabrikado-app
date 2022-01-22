import { ElementRef } from '@angular/core';

const hotKeyHints: Map<string, string> = new Map([
  ['a', 'LEFT MOUSE CLICK: select'],
  ['b', 'LEFT CTRL + LEFT MOUSE PRESS: map move'],
  ['c', ''],
  ['d', ''],
]);

export class HotKeyPanel {
  public canvas: ElementRef<HTMLCanvasElement>;
  public ctx: CanvasRenderingContext2D;
  public panelPath: Path2D | undefined;

  public size: number = 60;
  public height: number = 0;
  public x: number = 100;
  public y: number = 220;
  public lineWidth: number = 1;
  private margin: number = 15;

  constructor(
    canvas: ElementRef<HTMLCanvasElement>,
    ctx: CanvasRenderingContext2D
  ) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  public drawMe(): void {
    this.x = this.canvas.nativeElement.width - 1000;
    this.y = 100;
    this.panelPath = new Path2D();

    this.lineWidth = 0.5;

    this.ctx.beginPath();
    this.panelPath.moveTo(this.x, this.y);
    this.panelPath.lineTo(this.x + 300, this.y);
    this.panelPath.lineTo(this.x + 300, this.y + 200);
    this.panelPath.lineTo(this.x, this.y + 200);
    this.panelPath.lineTo(this.x, this.y);

    this.ctx.strokeStyle = '#009971';
    this.ctx.lineWidth = this.lineWidth;

    this.ctx.font = '12px Arial';

    this.ctx.fillStyle = '#009971';

    let topMargin: number = 30;

    hotKeyHints.forEach((hint: string) => {
      this.ctx.fillText(hint, this.x + this.margin, this.y + topMargin);
      topMargin += 20;
    });

    this.ctx.stroke(this.panelPath);
  }
}
