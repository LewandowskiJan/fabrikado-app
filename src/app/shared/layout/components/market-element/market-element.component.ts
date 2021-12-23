import { Component } from '@angular/core';

import { DiodeType } from '../diode/diode.component';

@Component({
  selector: 'app-market-element',
  templateUrl: './market-element.component.html',
  styleUrls: ['./market-element.component.scss'],
})
export class MarketElementComponent {
  public diodeTypes: typeof DiodeType = DiodeType;
}
