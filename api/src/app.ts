import bodyParser from 'body-parser';
import express from 'express';
import { Express } from 'express';
import http from 'http';
import { Server } from 'socket.io';

import { dbConnect } from './db/services/db.service';
import { Game } from './game/game';
import { MicroServiceConfiguration } from './rest/configuration/micro-services.configuration';
import { ClientEventsMap } from './sockets/configuration/socket-event.map';
import { SocketSetup } from './sockets/configuration/socket-setup';

const app: Express = express();
const server: http.Server = http.createServer(app);

const port: number = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

console.info('[Database] connecting...');

dbConnect().on('error', (error: any[]) =>
  console.log('[Database] connection failed', error)
);

console.info('[Database] connected success', '\x1b[0m');

console.info('[Micro services] configuring...', '\x1b[0m');
MicroServiceConfiguration.setupMicroServices(app);
console.info('[Micro services] configured success', '\x1b[0m');

console.info('[Game] setup starting...', '\x1b[0m');
const io: Server<ClientEventsMap, ClientEventsMap> = SocketSetup.setup(server);
Game.startGame(io);
console.info('[Game] setup end - success', '\x1b[0m');

server.listen(port, () => {
  return console.log('\x1b[1m', `server is listening on ${port}`, '\x1b[0m');
});
