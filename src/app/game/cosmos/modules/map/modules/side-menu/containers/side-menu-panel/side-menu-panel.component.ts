import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterContentInit, Component } from '@angular/core';

import { Observable } from 'rxjs';

import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-side-menu-panel',
  templateUrl: './side-menu-panel.component.html',
  styleUrls: ['./side-menu-panel.component.scss'],
})
export class SideMenuPanelComponent implements AfterContentInit {
  public visible: boolean = false;
  public filter: any;

  public accordions$: Observable<any> = this.sideMenuService.getData();

  constructor(private sideMenuService: SideMenuService) {}

  ngAfterContentInit(): void {
    console.log('abcd');

    setTimeout(() => {
      this.visible = true;
    }, 1000);
  }

  accordions: any = [
    {
      description: 'Fleet',
      type: 'fleet',
    },
    {
      description: 'Notes',
      type: 'notes',
    },
    {
      description: 'Friends',
      type: 'friends',
    },
    {
      description: 'Quick navigation',
      type: 'quickNavigation',
    },
  ];

  public drop(event: CdkDragDrop<string[]>): any {
    moveItemInArray(this.accordions, event.previousIndex, event.currentIndex);
  }
}
