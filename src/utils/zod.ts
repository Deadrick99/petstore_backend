import { z } from "zod";
import { DateTime } from "luxon";

export const STR = z
  .string({
    required_error: "This is required",
    invalid_type_error: "This must be a string",
  })
  .trim();

export const STR_NON_EMPTY = STR.min(1, "This must not be empty");

export const NUM = z.number({
  required_error: "This is required",
  invalid_type_error: "This must be a number",
});

export const NUM_STR = STR_NON_EMPTY.refine((str) => {
  return !Number.isNaN(Number.parseFloat(str));
}, "This must be a string containing a number");

export const INT = NUM.int("This must be an integer");

export const INT_STR = STR_NON_EMPTY.refine((str) => {
  return !Number.isNaN(Number.parseInt(str));
}, "This must be a string containing an integer");

export const DATE_STR = STR.refine(
  (str) => {
    return DateTime.fromISO(str).isValid;
  },
  {
    message:
      "This must be a DateTime string in ISO format. Simple Format: 'YYYY-MM-DD HH:MM:SS'. Suggest using a JSON library to get valid strings from Date objects",
  }
);

export const PHONE_STR = STR.regex(
  /^[\+]?[(]?[0-9]{3}[)]?[- \t\.]?[0-9]{3}[- \t\.]?[0-9]{4,6}$/,
  "This must be a phone number in format: '(123) 456 7890'"
);

export const ZIP_CODE_STR = STR.regex(/^\d{5}(-\d{4})?$/, "This must be a zip code in format: '00000' or '00000-0000'");

export const zodTypes = {
  STR,
  STR_NON_EMPTY,
  INT,
  INT_STR,
  NUM,
  NUM_STR,
  DATE_STR,
  PHONE_STR,
  ZIP_CODE_STR,
};
