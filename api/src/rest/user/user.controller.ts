import { Request, Response } from 'express';

import { UserDao } from './../../db/user/user.dao';
import { UserData } from './../../db/user/user-schema.model';

export async function getUser(
  request: Request,
  response: Response,
  next: any
): Promise<any> {
  try {
    // const userFromDb: UserData = await UserDao.findUserById({
    //   params: { id: '61c3871db04d1e63f2ddbf2f' },
    // });

    const userFromDb: UserData = await UserDao.findUser({
      searchQuery: { login: request.body.login },
    });

    userFromDb.password = request.body.password
      ? response.json(userFromDb)
      : next(new Error());
  } catch (error) {
    return next(error);
  }
}

export async function getUserById(
  request: Request,
  response: Response,
  next: any
): Promise<any> {
  try {
    const userFromDb: UserData = await UserDao.findUserById({
      params: { id: request.params.userId },
    });

    response.json(userFromDb);
    //   userFromDb.password = request.body.password
    //     ? response.json(userFromDb)
    //     : next(new Error());
  } catch (error) {
    return next(error);
  }
}
