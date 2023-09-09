import { Response } from "express";
import { ValidationErrorItem } from "joi";

export const badRequestException = (res: Response, errors: ValidationErrorItem[]) => {
  res.status(400);
  console.log(errors);
  res.send({
    errors: errors.map((error) => ({
      field: error.context?.label,
      message: error.message.replace(/"/gi, ""),
    })),
  });
};
