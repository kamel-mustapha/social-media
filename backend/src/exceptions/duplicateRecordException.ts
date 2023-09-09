import { Response } from "express";
import { ValidationErrorItem } from "joi";

export const duplicateRecordException = (res: Response, table: string, error: any) => {
  res.status(409);
  const field = Object.keys(error.keyPattern)[0];
  res.send({
    message: "duplicate entry for table " + table,
    field,
  });
};
