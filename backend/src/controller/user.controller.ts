import { Request, Response } from "express";
import { BaseController } from "./base.controller";
import userRepository from "../repository/user.repository";
import { duplicateRecordException } from "../exceptions/duplicateRecordException";

class UserController implements BaseController {
  async getAll(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async getById(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async add(req: Request, res: Response): Promise<void> {
    const user = await userRepository.create(req.body).catch((error) => {
      if (error.code === 11000) return duplicateRecordException(res, "users", error);
    });
    res.send(user);
  }
  async update(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async delete(req: Request, res: Response): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async changePassword(req: Request, res: Response): Promise<void> {}
}

export default new UserController();
