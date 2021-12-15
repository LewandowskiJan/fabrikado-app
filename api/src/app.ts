import express from 'express';
import http from 'http';
import { Express, Request, Response } from 'express';

import { defaultErrorHandler } from './handlers/default-error-handler';
import { logErrors } from './handlers/log-error';

import { Server } from 'socket.io';
import { Game } from './models/class/game';

const app: Express = express();
const server: http.Server = http.createServer(app);
const io: Server<any> = new Server(server);

const port: number = 3000;

app.use(logErrors);
app.use(defaultErrorHandler);

app.get('/', (request: Request, response: Response) => {
  response.send('Works');
});

Game.startGame(io);

server.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
