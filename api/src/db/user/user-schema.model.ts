import { Model, model, Schema } from 'mongoose';
import mongooseUniqueValidator from 'mongoose-unique-validator';

export interface UserData {
  _id?: string;
  password: string;
  login: string;
  dateOfCreate?: Date;
  isActive: boolean;
  planets: string[];
}

export interface UserSchema extends Document {
  password: string;
  login: string;
  dateOfCreate?: Date;
  isActive: boolean;
  planets: string[];
}

const userSchema: Schema = new Schema<UserSchema>({
  password: {
    type: String,
    required: true,
  },
  login: {
    type: String,
    required: true,
    unique: true,
  },
  planets: [String],
  dateOfCreate: {
    type: Date,
    default: new Date(Date.now()),
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});
userSchema.plugin(mongooseUniqueValidator);

export const User: Model<UserSchema> = model<UserSchema>('User', userSchema);
