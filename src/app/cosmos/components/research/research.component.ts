import { Component } from '@angular/core';

import { Structure } from '../../models/structure';
import { ResearchService } from '../../services/research.service';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.scss'],
})
export class ResearchComponent {
  public structures: Structure[] = this.researchService.research;
  public currentDetails: Structure | undefined;

  constructor(private researchService: ResearchService) {}

  public selectDetails(details: Structure): void {
    this.currentDetails = details;
  }
}
