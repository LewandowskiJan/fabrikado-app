import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { SideMenuService } from '../../services/side-menu.service';

export interface VisibleOptionFormData {
  fleet: boolean;
  notes: boolean;
  friends: boolean;
  quickNavigation: boolean;
}

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
        console.log(visibleOptionFormData);
        this.sideMenuService.setData(visibleOptionFormData);
      }
    );
  }
}
