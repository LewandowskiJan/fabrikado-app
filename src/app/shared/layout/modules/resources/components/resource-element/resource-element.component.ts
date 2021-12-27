import { Component, Input } from '@angular/core';

import {
  ResourceShortCode,
  resourceShortCodeMap,
} from '../../model/resource-short-code-map';

@Component({
  selector: 'app-resource-element',
  templateUrl: './resource-element.component.html',
  styleUrls: ['./resource-element.component.scss'],
})
export class ResourceElementComponent {
  @Input() public resourceValue: number | string | undefined;
  @Input() public resourceName: string | undefined;
  public resourceShortCode: Map<string, ResourceShortCode> =
    resourceShortCodeMap;
}
