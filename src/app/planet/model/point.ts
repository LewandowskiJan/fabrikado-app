export class Point {
  public x: number;
  public y: number;
  public z: number;
  private context: CanvasRenderingContext2D;

  constructor(
    x: number,
    y: number,
    z: number,
    context: CanvasRenderingContext2D
  ) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.context = context;
  }

  public rotateX(amount: number): void {
    const y: number = this.y;
    this.y = y * Math.cos(amount) + this.z * Math.sin(amount) * -1.0;
    this.z = y * Math.sin(amount) + this.z * Math.cos(amount);
  }

  public rotateY(amount: number): void {
    const x: number = this.x;
    this.x = x * Math.cos(amount) + this.z * Math.sin(amount) * -1.0;
    this.z = x * Math.sin(amount) + this.z * Math.cos(amount);
  }

  public rotateZ(amount: number): void {
    const x: number = this.x;
    this.x = x * Math.cos(amount) + this.y * Math.sin(amount) * -1.0;
    this.y = x * Math.sin(amount) + this.y * Math.cos(amount);
  }

  public getProjection(
    distance: number,
    xy: number,
    offSet: number,
    offSetZ: number
  ): number {
    return (distance * xy) / (this.z - offSetZ) + offSet;
  }

  public draw(x: number, y: number, size: number, color: string): void {
    this.context.save();
    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.arc(x, y, size, 0, 2 * Math.PI, true);
    this.context.fill();
    this.context.restore();
  }
}
