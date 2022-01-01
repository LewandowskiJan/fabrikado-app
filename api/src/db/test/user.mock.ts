import { dbConnect } from '../services/db.service';
import { UserDao } from '../user/user.dao';
import { GameState } from './../../game/game.state';
import { UserData } from './../user/user-schema.model';

export async function addTestUserToDatabase(): Promise<void> {
  await dbConnect('test').dropDatabase();

  const user1: UserData = {
    _id: '61c3871db04d1e63f2ddbf2f',
    password: '123',
    login: 'abc',
    isActive: true,
    planets: [GameState.planets[0].name, GameState.planets[1].name],
  };

  const user2: UserData = {
    _id: '61c9fb4ac2fbb2a228441a99',
    password: '123',
    login: 'cba',
    isActive: true,
    planets: [GameState.planets[2].name, GameState.planets[3].name],
  };

  await UserDao.addUser({ body: user1 });
  await UserDao.addUser({ body: user2 });
}
