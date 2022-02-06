import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { VisibleOptionFormData } from '@models/interfaces/game/game-map/visible-option-form-data';

import { SideMenuService } from '../../services/side-menu.service';

@Component({
  selector: 'app-side-menu-checkbox',
  templateUrl: './side-menu-checkbox.component.html',
  styleUrls: ['./side-menu-checkbox.component.scss'],
})
export class SideMenuCheckboxComponent implements OnInit {
  public visibleOptionForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sideMenuService: SideMenuService
  ) {
    this.visibleOptionForm = this.formBuilder.group({
      fleet: true,
      notes: true,
      friends: true,
      quickNavigation: true,
    });
  }
  ngOnInit(): void {
    this.visibleOptionForm.valueChanges.subscribe(
      (visibleOptionFormData: VisibleOptionFormData) => {
        this.sideMenuService.setData(visibleOptionFormData);
      }
    );
  }
}
