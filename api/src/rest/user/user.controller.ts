import { Request, Response } from 'express';

export async function getUser(
  request: Request,
  response: Response,
  next: any
): Promise<any> {
  try {
    response.json({ id: '1', name: 'player 1', planets: [1, 2] });
  } catch (error) {
    return next(error);
  }
}
