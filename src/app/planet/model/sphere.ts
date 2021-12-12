import { Point } from './point';

export class Sphere {
  private points: Point[];
  private radius: number;
  private width: number;
  private height: number;
  private numberOfVertexes: number;
  private rotation: number;
  private distance: number;
  private context: CanvasRenderingContext2D;

  constructor(
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    radius: number = 20.0
  ) {
    this.context = context;
    this.points = [];
    this.radius = radius;
    this.width = width;
    this.height = height;
    this.numberOfVertexes = 0;

    this.rotation = 0;
    this.distance = 0;

    this.init();
  }

  private init(): void {
    for (let alpha: number = 0; alpha <= 6.28; alpha += 0.17) {
      const x: number = Math.cos(alpha) * this.radius;
      const y: number = 0;
      const z: number = Math.sin(alpha) * this.radius;

      const p: Point = (this.points[this.numberOfVertexes] = new Point(
        x,
        y,
        z,
        this.context
      ));

      this.numberOfVertexes++;
    }

    for (let direction: number = 1; direction >= -1; direction -= 2) {
      for (let beta: number = 0.17; beta < Math.PI; beta += 0.17) {
        const radius: number = Math.cos(beta) * this.radius;
        const fixedY: number = Math.sin(beta) * this.radius * direction;

        for (let alpha: number = 0; alpha < 6.28; alpha += 0.09) {
          const x: number = Math.cos(alpha) * radius;
          const y: number = fixedY;
          const z: number = Math.sin(alpha) * radius;

          const p: Point = (this.points[this.numberOfVertexes] = new Point(
            x,
            y,
            z,
            this.context
          ));

          this.numberOfVertexes++;
        }
      }
    }
  }

  public draw(width: number, height: number): void {
    let x: number, y: number;
    const p: Point = new Point(0, 0, 0, this.context);

    for (let i: number = 0; i < this.numberOfVertexes; i++) {
      p.x = this.points[i].x;
      p.y = this.points[i].y;
      p.z = this.points[i].z;

      // p.rotateX(this.rotation);
      p.rotateY(this.rotation);
      // p.rotateZ(this.rotation);

      x = p.getProjection(this.distance, p.x, width / 2.0, 100.0);
      y = p.getProjection(this.distance, p.y, height / 2.0, 100.0);

      if (x >= 0 && x < width) {
        if (y >= 0 && y < height) {
          if (p.z < 0) {
            // p.draw(x, y, 1, 'rgba(100,100,100,0.1)');
          } else {
            p.draw(x, y, 0.5, 'rgb(200, 200, 250, 0.1)');
          }
        }
      }
    }
  }

  public update(): void {
    this.rotation += Math.PI / 360.0;

    if (this.distance < this.width * 2) {
      this.distance += this.width / 5;
    }
  }
}
