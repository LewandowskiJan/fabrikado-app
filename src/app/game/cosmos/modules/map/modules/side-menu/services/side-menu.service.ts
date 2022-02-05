import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { VisibleOptionFormData } from './../containers/side-menu-checkbox/side-menu-checkbox.component';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  public sideMenuCheckbox$: Subject<any> = new BehaviorSubject({
    fleet: true,
    notes: true,
    friends: true,
    quickNavigation: true,
  });

  public setData(data: VisibleOptionFormData): void {
    this.sideMenuCheckbox$.next(data);
  }
  public getData(): Observable<VisibleOptionFormData> {
    return this.sideMenuCheckbox$.asObservable();
  }
}
