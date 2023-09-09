import Joi from "joi";
import { stringValidator } from "./common.validators";

export const add = Joi.object({
  firstName: stringValidator(),
  lastName: stringValidator(),
  username: stringValidator(),
  password: stringValidator(8, 40),
  passwordConfirmation: Joi.equal(Joi.ref("password")).messages({ "any.only": "{{#label}} does not match password" }),
  email: stringValidator(10, 80).email(),
}).options({
  abortEarly: false,
});
