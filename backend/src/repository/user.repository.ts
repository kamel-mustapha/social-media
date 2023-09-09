import { UserInterface } from "../interfaces/user.interface";
import User from "../models/User";
import { BaseRepository } from "./base.repository";
import bcrypt from "bcryptjs";

class UserRepository implements BaseRepository {
  async create(user: UserInterface): Promise<UserInterface> {
    const addedUser = new User(user);
    await addedUser.save();
    return addedUser;
  }
  readOne(id: number): Promise<UserInterface> {
    throw new Error("Method not implemented.");
  }
  readAll(): Promise<UserInterface[]> {
    throw new Error("Method not implemented.");
  }
  update(id: number, updatedUser: UserInterface): Promise<UserInterface> {
    throw new Error("Method not implemented.");
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async comparePassword(oldPassword: string) {
    // bcrypt.compare(pass, this.password);
  }
}

export default new UserRepository();
