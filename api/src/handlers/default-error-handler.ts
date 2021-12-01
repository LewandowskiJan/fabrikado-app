import { NextFunction, Request, Response } from 'express';

export function defaultErrorHandler(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): any {
  if (response.headersSent) {
    return next(error);
  }
  response.status(500);
  response.render('error', { error });
}
