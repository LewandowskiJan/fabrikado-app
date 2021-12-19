import cors from 'cors';
import { Express, Request, Response } from 'express';

import { defaultErrorHandler } from './../../handlers/default-error-handler';
import { logErrors } from './../../handlers/log-error';
import { UserRoute } from './../user/user.route';

const microServices: string[] = [];

export class MicroServiceConfiguration {
  private static app: Express;
  public static setupMicroServices(app: Express): Express {
    this.app = app;

    this.setupHandlers();
    this.setupHeaders();
    this.setupPreFlight();
    this.setupMicroServiceUrlPaths();

    return this.app;
  }

  private static setupMicroServiceUrlPaths(): void {
    this.app.use(cors());
    this.app.use('/api/user', cors(), UserRoute);
  }

  private static setupHandlers(): void {
    this.app.use(logErrors);
    this.app.use(defaultErrorHandler);
  }

  private static setupHeaders(): void {
    this.app.use((request: Request, response: Response, next: any) => {
      response.setHeader(
        'Access-Control-Allow-Origin',
        'http://localhost:4200'
      );
      response.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, PATCH, DELETE'
      );
      response.setHeader(
        'Access-Control-Allow-Headers',
        'X-Requested-With, Content-Type, Accept'
      );
      next();
    });
  }

  private static setupPreFlight() {
    this.app.options('*', (request: Request, response: Response) => {
      response.send(200);
    });
  }
}
