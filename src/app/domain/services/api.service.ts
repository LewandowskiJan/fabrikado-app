import { Injectable } from '@angular/core';

import { RestService } from './rest.service';
import { SocketService } from './socket.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(
    private restService: RestService,
    private socketService: SocketService
  ) {}

  public request(): void {}
}
