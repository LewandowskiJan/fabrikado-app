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

dbConnect().on('error', (error: any[]) =>
  console.log('connection to db failed', error)
);

MicroServiceConfiguration.setupMicroServices(app);

const io: Server<ClientEventsMap, ClientEventsMap> = SocketSetup.setup(server);
Game.startGame(io);

server.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
