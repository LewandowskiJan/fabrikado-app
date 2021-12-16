import express from 'express';
import { Express, Request, Response } from 'express';
import http from 'http';
import { Server } from 'socket.io';

import { Game } from './game/game';
import { defaultErrorHandler } from './handlers/default-error-handler';
import { logErrors } from './handlers/log-error';
import { ClientEvents } from './sockets/configuration/socket-event.map';
import { SocketSetup } from './sockets/configuration/socket-setup';

const app: Express = express();
const server: http.Server = http.createServer(app);

const port: number = 3000;

app.use(logErrors);
app.use(defaultErrorHandler);

app.get('/', (request: Request, response: Response) => {
  response.send('Works');
});

const io: Server<ClientEvents, ClientEvents> = SocketSetup.setup(server);
Game.startGame(io);

server.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
