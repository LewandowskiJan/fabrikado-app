import { Component } from '@angular/core';

import { Structure } from '../../models/structure';
import { DefenceService } from '../../services/defence.service';

@Component({
  selector: 'app-defence',
  templateUrl: './defence.component.html',
  styleUrls: ['./defence.component.scss'],
})
export class DefenceComponent {
  public structures: Structure[] = this.defenceService.defence;
  public currentDetails: Structure | undefined;

  constructor(private defenceService: DefenceService) {}

  public selectDetails1(details: Structure): void {
    this.currentDetails = details;
  }
}
