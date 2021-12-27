import { Component } from '@angular/core';

import { SocketService } from '@src/app/domain/services/socket.service';

@Component({
  selector: 'app-logout-page',
  templateUrl: './logout-page.component.html',
  styleUrls: ['./logout-page.component.scss'],
})
export class LogoutPageComponent {
  constructor(private socketService: SocketService) {
    this.socketService.socket.disconnect();
  }
}
