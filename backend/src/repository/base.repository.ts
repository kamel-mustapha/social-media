import { UserInterface } from "../interfaces/user.interface";

export interface BaseRepository {
  create(user: UserInterface): Promise<UserInterface>;
  readOne(id: number): Promise<UserInterface>;
  readAll(): Promise<UserInterface[]>;
  update(id: number, updatedUser: UserInterface): Promise<UserInterface>;
  delete(id: number): Promise<void>;
}
