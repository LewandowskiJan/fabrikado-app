import { Provider } from '@angular/core';

import { SocketService } from './socket.service';

export const socketServiceMock: any = jasmine.createSpyObj('SocketService', [
  'listeningOnEvent',
  'sendToEvent',
]);

export const socketServiceProvider: Provider = {
  provide: SocketService,
  useValue: socketServiceMock,
};
