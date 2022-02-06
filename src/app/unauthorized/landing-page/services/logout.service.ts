import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { SocketService } from '@src/app/domain/socket.service';

export enum LogoutLocalization {
  DEFAULT = 'login-page',
  LOGIN_PAGE = 'login-page',
}

type NavigateAfterLogoutUrl = string;

const localizationMap: Map<LogoutLocalization, NavigateAfterLogoutUrl> =
  new Map([
    [LogoutLocalization.DEFAULT, '/welcome/login'],
    [LogoutLocalization.LOGIN_PAGE, '/welcome/login'],
  ]);

@Injectable({
  providedIn: 'root',
})
export class LogoutService {
  constructor(private router: Router, private socketService: SocketService) {}

  public logout(
    logoutLocalization: LogoutLocalization = LogoutLocalization.DEFAULT
  ): void {
    this.socketService.socket.disconnect();
    localStorage.removeItem('token');
    this.router.navigateByUrl(
      localizationMap.get(logoutLocalization) as string
    );
  }
}
