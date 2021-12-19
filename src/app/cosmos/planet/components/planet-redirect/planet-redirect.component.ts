import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-planet-redirect',
  templateUrl: './planet-redirect.component.html',
  styleUrls: ['./planet-redirect.component.scss'],
})
export class PlanetRedirectComponent {
  constructor(private router: Router) {
    this.router.navigateByUrl('/cosmos/planet/1/overview');
  }
}
