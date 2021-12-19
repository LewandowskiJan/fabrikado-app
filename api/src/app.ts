import express from 'express';
import { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';

import { Game } from './game/game';
import { MicroServiceConfiguration } from './rest/configuration/micro-services.configuration';
import { ClientEvents } from './sockets/configuration/socket-event.map';
import { SocketSetup } from './sockets/configuration/socket-setup';

const app: Express = express();
const server: http.Server = http.createServer(app);

const port: number = 3000;
MicroServiceConfiguration.setupMicroServices(app);

const io: Server<ClientEvents, ClientEvents> = SocketSetup.setup(server);
Game.startGame(io);

server.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
