import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanLoad {
  canLoad(): boolean {
    return !!localStorage.getItem('token');
  }
}
