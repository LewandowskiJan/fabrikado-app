import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Structure } from 'src/app/cosmos/models/structure';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss'],
})
export class StructureComponent {
  @Input() public structureDetails: Structure | undefined;
  @Output() public selectEmitter: EventEmitter<Structure> =
    new EventEmitter<Structure>();

  public selectStructure(): void {
    this.selectEmitter.emit(this.structureDetails);
  }
}
