import { Component, Input } from '@angular/core';

const colorMap: Map<string, string> = new Map([
  ['BLUE', 'blue'],
  ['BLUE-GREEN', 'blue-green'],
  ['RED', 'red'],
]);
@Component({
  selector: 'app-landing-page-layout',
  templateUrl: './landing-page-layout.component.html',
  styleUrls: ['./landing-page-layout.component.scss'],
})
export class LandingPageLayoutComponent {
  public colorCssClass: string = 'blue';

  @Input() set color(color: string) {
    if (colorMap.has(color)) {
      this.colorCssClass = colorMap.get(color) as string;
    }
  }
}
