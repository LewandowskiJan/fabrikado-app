import { Component, Input } from '@angular/core';

import { Technology } from '../../model/technology';

@Component({
  selector: 'app-technology-details',
  templateUrl: './technology-details.component.html',
  styleUrls: ['./technology-details.component.scss'],
})
export class TechnologyDetailsComponent {
  @Input() technology: Technology | undefined;
}
