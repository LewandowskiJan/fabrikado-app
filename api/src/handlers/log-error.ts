import { NextFunction, Request, Response } from 'express';

export function logErrors(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
): void {
  console.error(error.stack);
  next(error);
}
