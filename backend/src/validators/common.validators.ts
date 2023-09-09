import Joi from "joi";

export const stringValidator = (min = 2, max = 50) => {
  return Joi.string().min(min).max(max).required();
};
