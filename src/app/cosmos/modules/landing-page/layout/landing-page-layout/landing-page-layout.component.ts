import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-landing-page-layout',
  templateUrl: './landing-page-layout.component.html',
  styleUrls: ['./landing-page-layout.component.scss'],
})
export class LandingPageLayoutComponent {
  @Input() color: string = 'BLUE';
}
