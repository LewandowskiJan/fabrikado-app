import { DaoOptions } from '../services/models/search-option';
import { UtilDaoService } from './../services/util-dao.service';
import { User } from './user-schema.model';

export class UserDao {
  public static async getAllUsers(options: DaoOptions): Promise<any> {
    return await UtilDaoService.find(options, User);
  }

  public static async findUser(options: DaoOptions): Promise<any> {
    return await UtilDaoService.find(options, User);
  }

  public static async findUserById(options: DaoOptions): Promise<any> {
    return await UtilDaoService.findById(options, User);
  }

  public static async addUser(options: DaoOptions): Promise<any> {
    return await UtilDaoService.add(options, User);
  }
}
