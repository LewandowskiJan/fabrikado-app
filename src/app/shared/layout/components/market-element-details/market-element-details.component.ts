import { Component } from '@angular/core';

import { DiodeType } from '../diode/diode.component';
import { DiodeSize } from './../diode/diode.component';
@Component({
  selector: 'app-market-element-details',
  templateUrl: './market-element-details.component.html',
  styleUrls: ['./market-element-details.component.scss'],
})
export class MarketElementDetailsComponent {
  public diodeTypes: typeof DiodeType = DiodeType;
  public diodeSizes: typeof DiodeSize = DiodeSize;
}
