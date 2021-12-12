import { Resource } from '@src/models/resource';
import { Server, Socket } from 'socket.io';

const resources: Resource = {
  iron: 2,
  energy: 3,
};

export function setupSocketConfiguration(io: Server<any>): void {
  io.on('connection', (socket: Socket<any>) => {
    console.log('A user connected');

    socket.on('disconnect', function () {
      console.log('A user disconnected');
    });

    socket.on('fetchSource', () => {
      console.log('fetchSource');
      io.emit('fetchSource', resources);
    });
  });

  setInterval(() => {
    resources.iron += 1;
    resources.energy += 2;
    io.volatile.emit('fetchSource', resources);
  }, 1_000);
}
