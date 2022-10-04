import { Decimal } from "@prisma/client/runtime";
import { z } from "zod";

const TEXT = z.string({
  required_error: `This field is required`,
  invalid_type_error: `This field must be a string`,
});

const INT = z
  .number({
    required_error: `This field is required`,
    invalid_type_error: `This field must be a number`,
  })
  .int(`This field must be a whole number`);

const REAL = z.number({
  required_error: `This field is required`,
  invalid_type_error: `This field must be a number`,
});

const DECIMAL_TO_NUMBER = z
  .any({
    required_error: `This field is required`,
    invalid_type_error: `This field must be a DECIMAL (Prisma) type`,
  })
  .transform((decimal: Decimal) => {
    return decimal.toNumber();
  });

const DATE_STR = z
  .string({
    required_error: `This field is required`,
    invalid_type_error: `This field must be a date string`,
  })
  .refine((str) => Date.parse(str), {
    message: `This field must be a date string in a recognizable format. Suggest: 'YYYY-MM-DD HH:MM:SS' or (if using javascript) use JSON.stringify() to get a valid string from a Date object`,
  });

const DATE_TO_STR = z
  .date({
    required_error: `This field is required`,
    invalid_type_error: `This field must be a Date object`,
  })
  .transform((date: Date) => {
    return date
      .toJSON()
      .replace("T", " ")
      .replace(/\.\d\d\dZ/, "");
  });

const STR_TO_DATE = z
  .string({
    required_error: `This field is required`,
    invalid_type_error: `This field must be a date string`,
  })
  .refine((str) => Date.parse(str), {
    message: `This field must be a date string in a recognizable format. Suggest: 'YYYY-MM-DD HH:MM:SS' or (if using javascript) use JSON.stringify() to get a valid string from a Date object`,
  })
  .transform((str: string) => new Date(str));

const BLOB_STR = z
  .string({
    required_error: `This field is required`,
    invalid_type_error: `This field must be a base64 encoded byte string`,
  })
  .refine(
    (str) => {
      return true;
    },
    { message: `This field must be a BLOB type` }
  );

const types = {
  TEXT,
  INT,
  REAL,
  DECIMAL_TO_NUMBER,
  DATE_STR,
  DATE_TO_STR,
  STR_TO_DATE,
  BLOB_STR,
};

export default types;
