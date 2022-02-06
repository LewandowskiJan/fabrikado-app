import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-fleet-name',
  templateUrl: './fleet-name.component.html',
  styleUrls: ['./fleet-name.component.scss'],
})
export class FleetNameComponent {
  @Input() public name: string | undefined;
}
