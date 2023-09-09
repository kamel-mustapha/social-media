import { Request, Response, NextFunction } from "express";
import * as userValidators from "../validators/user.validators";
import { badRequestException } from "../exceptions/badRequestException";

class UserMiddlewares {
  add = (req: Request, res: Response, next: NextFunction) => {
    const validUser = userValidators.add.validate(req.body);
    if (validUser.error?.details) return badRequestException(res, validUser.error.details);
    next();
  };
}

export default new UserMiddlewares();
