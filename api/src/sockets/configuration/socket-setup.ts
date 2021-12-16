import http from 'http';
import { Server, ServerOptions } from 'socket.io';

import { AllEvents } from './socket-event.map';

const serverOptions: Partial<ServerOptions> = {
  cors: {
    origin: ['http://localhost:4200'],
  },
};

export class SocketSetup {
  public static setup(server: http.Server): Server<AllEvents, AllEvents> {
    const io: Server<AllEvents, AllEvents> = new Server(server, serverOptions);

    return io;
  }
}
