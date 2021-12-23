import { dbConnect } from '../services/db.service';
import { UserDao } from '../user/user.dao';
import { GameState } from './../../game/game.state';
import { UserData } from './../user/user-schema.model';

export async function addTestUserToDatabase(): Promise<void> {
  dbConnect('test').dropDatabase();

  const user: UserData = {
    _id: '61c3871db04d1e63f2ddbf2f',
    password: '123',
    login: 'abc',
    isActive: true,
    planets: [GameState.planets[0].name, GameState.planets[1].name],
  };

  await UserDao.addUser({ body: user });
}
