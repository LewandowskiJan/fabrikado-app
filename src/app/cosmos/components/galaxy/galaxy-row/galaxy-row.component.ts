import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galaxy-row',
  templateUrl: './galaxy-row.component.html',
  styleUrls: ['./galaxy-row.component.scss'],
})
export class GalaxyRowComponent {
  @Input() public items: number | undefined;
  public position: number = 1;
  public planetName: string = 'Main planet';
  public examplePlayer: string = 'Test Player123';
  public alliance: string = 'example alliance';
  public actionBar1: string = 'x';
  public actionBar2: string = 'y';
  public actionBar3: string = 'z';
}
