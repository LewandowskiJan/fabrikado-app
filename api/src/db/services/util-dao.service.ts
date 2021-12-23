import { Document, Model } from 'mongoose';

import { DaoOptions } from './models/search-option';

export class UtilDaoService {
  public static async findById<typeOfSchema>(
    options: DaoOptions,
    DatabaseSchema: Model<typeOfSchema>
  ): Promise<any> {
    return await DatabaseSchema.findOne({ _id: options.params.id } as any);
  }

  public static async find<typeOfSchema>(
    options: DaoOptions,
    DatabaseSchema: Model<typeOfSchema>
  ): Promise<typeOfSchema[]> {
    return await DatabaseSchema.find(options.searchQuery)
      .sort(options.sort)
      .limit(options.limit);
  }

  public static async add<typeOfSchema>(
    options: DaoOptions,
    DatabaseSchema: Model<typeOfSchema>
  ): Promise<Document<any, any, typeOfSchema>> {
    const newDatabaseObject: any = new DatabaseSchema({
      ...options.body,
    });
    return await newDatabaseObject.save();
  }
}
