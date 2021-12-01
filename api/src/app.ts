import express from 'express';
import { Express, Request, Response } from 'express';

import { defaultErrorHandler } from './handlers/default-error-handler';
import { logErrors } from './handlers/log-error';

const app: Express = express();
const port: number = 3000;

app.use(logErrors);
app.use(defaultErrorHandler);

app.get('/', (request: Request, response: Response) => {
  response.send('Works');
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
