export class Path {
  public ctx: CanvasRenderingContext2D;
  public linePath: Path2D | undefined;
  public points: Path2D[] = [];

  public x: number = 0;
  public y: number = 0;
  public lineWidth: number = 1;
  public offset: number = 0;

  public speedAnimation: number = 0.3;

  public clicked: boolean = false;
  public onHover: boolean = false;

  public pathsCoordinates: { x: number; y: number }[] = [];

  constructor(
    ctx: CanvasRenderingContext2D,
    pathsCoordinates: { x: number; y: number }[]
  ) {
    this.pathsCoordinates = pathsCoordinates;
    this.ctx = ctx;
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
      this.lineWidth = 1;
      // this.size -= this.size > 100 ? 10 : 0;
    }
    this.linePath = new Path2D();

    this.offset += this.speedAnimation;
    if (this.offset > 120) {
      this.offset = 0;
    }

    this.ctx.beginPath();
    this.linePath.moveTo(
      this.pathsCoordinates[0].x,
      this.pathsCoordinates[0].y
    );
    for (let i: number = 1; i <= this.pathsCoordinates.length - 1; i++) {
      this.linePath.lineTo(
        this.pathsCoordinates[i].x,
        this.pathsCoordinates[i].y
      );

      this.points.push(
        this.drawPoint(this.pathsCoordinates[i].x, this.pathsCoordinates[i].y)
      );
    }

    this.ctx.strokeStyle = '#ffffff';
    this.ctx.setLineDash([8, 12]);
    this.ctx.lineDashOffset = -this.offset;
    this.ctx.lineWidth = this.lineWidth;
    this.ctx.stroke(this.linePath);
    this.ctx.setLineDash([0, 0]);
  }

  private drawPoint(x: number, y: number): Path2D {
    const path: Path2D = new Path2D();
    path.arc(x, y, 2, 0, Math.PI * 2, false);
    this.ctx.fillStyle = 'white';
    this.ctx.fill(path);
    return path;
  }
}
