import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';

const enum Status {
  OFF = 0,
  RESIZE = 1,
  MOVE = 2,
}
@Component({
  selector: 'app-testcontainer',
  templateUrl: './testcontainer.component.html',
  styleUrls: ['./testcontainer.component.scss'],
})
export class TestcontainerComponent implements AfterViewInit {
  @Input('width') public width: number = 0;
  @Input('height') public height: number = 0;
  @Input('left') public left: number = 0;
  @Input('top') public top: number = 0;
  @ViewChild('box') public box: ElementRef | undefined;
  private boxPosition: { left: number; top: number } = { left: 0, top: 0 };
  private containerPos: {
    left: number;
    top: number;
    right: number;
    bottom: number;
  } = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  };
  public mouse: { x: number; y: number } = { x: 0, y: 0 };
  public status: Status = Status.OFF;
  private mouseClick: { x: number; y: number; left: number; top: number } = {
    x: 0,
    y: 0,
    left: 0,
    top: 0,
  };

  ngAfterViewInit(): void {
    this.loadBox();
    this.loadContainer();
  }

  private loadBox() {
    if (!this.box) return;
    const { left, top }: { left: number; top: number } =
      this.box.nativeElement.getBoundingClientRect();
    this.boxPosition = { left, top };
  }

  private loadContainer() {
    const left: number = this.boxPosition.left - this.left;
    const top: number = this.boxPosition.top - this.top;
    const right: number = left + 600;
    const bottom: number = top + 450;
    this.containerPos = { left, top, right, bottom };
  }

  public setStatus(event: MouseEvent, status: number): void {
    if (status === 1) event.stopPropagation();
    else if (status === 2)
      this.mouseClick = {
        x: event.clientX,
        y: event.clientY,
        left: this.left,
        top: this.top,
      };
    else this.loadBox();
    this.status = status;
  }

  @HostListener('window:mousemove', ['$event'])
  public onMouseMove(event: MouseEvent): void {
    this.mouse = { x: event.clientX, y: event.clientY };

    if (this.status === Status.RESIZE) this.resize();
    else if (this.status === Status.MOVE) this.move();
  }

  private resize() {
    if (this.resizeCondMeet()) {
      this.width = Number(this.mouse.x > this.boxPosition.left)
        ? this.mouse.x - this.boxPosition.left
        : 0;
      this.height = Number(this.mouse.y > this.boxPosition.top)
        ? this.mouse.y - this.boxPosition.top
        : 0;
    }
  }

  private resizeCondMeet() {
    return (
      this.mouse.x < this.containerPos.right &&
      this.mouse.y < this.containerPos.bottom
    );
  }

  private move() {
    if (this.moveCondMeet()) {
      this.left = this.mouseClick.left + (this.mouse.x - this.mouseClick.x);
      this.top = this.mouseClick.top + (this.mouse.y - this.mouseClick.y);
    }
  }

  private moveCondMeet() {
    const offsetLeft: number = this.mouseClick.x - this.boxPosition.left;
    const offsetRight: number = this.width - offsetLeft;
    const offsetTop: number = this.mouseClick.y - this.boxPosition.top;
    const offsetBottom: number = this.height - offsetTop;
    return (
      this.mouse.x > this.containerPos.left + offsetLeft &&
      this.mouse.x < this.containerPos.right - offsetRight &&
      this.mouse.y > this.containerPos.top + offsetTop &&
      this.mouse.y < this.containerPos.bottom - offsetBottom
    );
  }
}
