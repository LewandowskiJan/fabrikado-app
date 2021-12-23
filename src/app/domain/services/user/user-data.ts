export interface UserData {
  _id?: string;
  password: string;
  login: string;
  dateOfCreate?: Date;
  isActive: boolean;
  planets: string[];
}
