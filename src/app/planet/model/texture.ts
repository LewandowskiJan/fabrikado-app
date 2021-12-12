export class Texture {
  public x: number;
  public y: number;
  public z: number;
  public rotation: number = 0;
  private context: CanvasRenderingContext2D;
  private distance: number = 0;

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

  public draw(width: number, height: number, isTexture: boolean = false): void {
    this.context.beginPath();
    const radius: number = this.distance; // Arc radius
    const startAngle: number = 0; // Starting point on circle
    const endAngle: number = 2 * Math.PI; // End point on circle

    this.context.arc(this.x, this.y, radius, startAngle, endAngle);

    let grd: CanvasGradient;
    if (isTexture) {
      grd = this.context.createLinearGradient(width / 2, 0, width / 2, height);

      grd.addColorStop(0.1, 'rgba(168, 105, 50, .5)');
      grd.addColorStop(0.2, 'rgba(89, 50, 16, .5)');
      grd.addColorStop(0.3, 'rgba(56, 32, 2, .5)');
      grd.addColorStop(0.4, 'rgba(100, 80, 16, .5)');
      grd.addColorStop(0.6, 'rgba(38, 37, 14, .5)');
      grd.addColorStop(0.7, 'rgba(97, 60, 31, .5)');
      grd.addColorStop(0.8, 'rgba(56, 32, 2, .5)');
      grd.addColorStop(0.9, 'rgba(87, 43, 8, .5)');
      grd.addColorStop(1, 'rgba(69, 45, 16, .5)');

      this.context.fillStyle = grd;
    } else {
      grd = this.context.createRadialGradient(
        100,
        height / 2,
        200,
        200,
        height / 2,
        500
      );

      grd.addColorStop(0, 'rgba(150,150,150, .4)');
      grd.addColorStop(0.2, 'rgba(0,0,0, .4)');

      this.context.fillStyle = grd;
    }

    this.context.fill();
  }

  public update(isTexture: boolean = false): void {
    this.rotation += Math.PI / 360.0;

    if (this.distance < 200) {
      this.distance += 20;
    }
  }
}
