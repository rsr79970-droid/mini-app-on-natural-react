interface UserNames {
  firstname: string;
  lastname: string;
}

export interface IUser {
  _id: string;
  email: string;
  password: string;
  username: string;
  name: UserNames;
  phone: string;
}

export type UsersResponse = {
  message: string;
  data: IUser[];
};
