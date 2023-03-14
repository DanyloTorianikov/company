/**
 * interface IUser
 *
 * @description
 *
 * provides an entity interface user
*/

export interface IUser {
  id: number;
  created: string;
  updated: string;
  email: string;
  password: string;
  username: string;
  phone?: string;
  nickname?: string;
}