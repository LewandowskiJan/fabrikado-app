import { Component, EventEmitter, Input, Output } from '@angular/core';

import { BuildingType } from '@src/app/models/buildingType';

import { Building } from './../../../models/building';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
})
export class StructureComponent {
  @Input() public building: Building | undefined;
  @Output() public selectEmitter: EventEmitter<BuildingType | undefined> =
    new EventEmitter();

  public selectStructure(): void {
    this.selectEmitter.emit(this.building?.type);
  }
}
