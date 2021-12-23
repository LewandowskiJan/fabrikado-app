import { Component, Input } from '@angular/core';

export enum DiodeType {
  ACTIVE = 'ACTIVE',
  NOT_ACTIVE = 'NOT_ACTIVE',
  ON_WORKING = 'ON_WORKING',
}

export enum DiodeSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

@Component({
  selector: 'app-diode',
  templateUrl: './diode.component.html',
  styleUrls: ['./diode.component.scss'],
})
export class DiodeComponent {
  @Input() public diodeType: DiodeType = DiodeType.ACTIVE;
  @Input() public diodeSize: DiodeSize = DiodeSize.SMALL;
  public diodeTypes: typeof DiodeType = DiodeType;

}
