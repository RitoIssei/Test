export interface IUser {
  _id?: string;
  username?: string
  email?: string
}

export interface ILoginData {
  accessToken?: string;
  user?: IUser;
}

export interface IRole {
  description?: string;
  name?: string;
}
