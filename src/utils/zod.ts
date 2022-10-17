import { z } from "zod";
import { DateTime } from "luxon";
import { extendApi } from "@anatine/zod-openapi";
import { Decimal } from "@prisma/client/runtime";

export const STR = () => {
  return z
    .string({
      required_error: "This is required",
      invalid_type_error: "This must be a string",
    })
    .trim();
};

export const STR_NON_EMPTY = () => {
  return STR().min(1, { message: "This must not be empty" });
};

export const NUM = () => {
  return z.number({
    required_error: "This is required",
    invalid_type_error: "This must be a number",
  });
};

export const DECIMAL_TO_NUM = () => {
  return z
    .any()
    .refine((data: any) => {
      return data instanceof Decimal;
    }, "This must be a Prisma.Decimal object")
    .transform((decimal: Decimal) => {
      return decimal.toNumber();
    });
};

export const NUM_STR = () => {
  return extendApi(
    STR_NON_EMPTY().refine(
      (str) => {
        return !Number.isNaN(Number.parseFloat(str));
      },
      { message: "This must be a string containing a number" }
    ),
    { example: "123.45" }
  );
};

export const INT = () => {
  return NUM().int({ message: "This must be an integer" });
};

export const INT_STR = () => {
  return STR_NON_EMPTY().refine(
    (str) => {
      return !Number.isNaN(Number.parseInt(str));
    },
    { message: "This must be a string containing an integer" }
  );
};

export const DATE_STR = () => {
  return extendApi(
    STR().refine(
      (str) => {
        return DateTime.fromISO(str).isValid;
      },
      {
        message:
          "This must be a DateTime string in ISO format. Simple Format: 'YYYY-MM-DD HH:MM:SS'. Suggest using a JSON library to get valid strings from Date objects",
      }
    ),
    { example: "123" }
  );
};

export const DATE_TO_STR = () => {
  return z.date().transform((date) => {
    return DateTime.fromJSDate(date).toISO();
  });
};

export const PHONE_STR = () => {
  return extendApi(
    STR().regex(/^(\([0-9]{3}\)[ ]?)?[0-9]{3}[- ]?[0-9]{4,6}$/, {
      message: "This must be a phone number in format: '123-4567' or (123) 456 7890'",
    }),
    { example: "123 4567" }
  );
};

export const ZIP_CODE_STR = () => {
  return extendApi(
    STR().regex(/^\d{5}(-\d{4})?$/, {
      message: "This must be a zip code in format: '12345' or '12345-6789'",
    }),
    {
      example: "12345",
    }
  );
};

export const zodTypes = {
  STR,
  STR_NON_EMPTY,
  INT,
  INT_STR,
  NUM,
  DECIMAL_TO_NUM,
  NUM_STR,
  DATE_STR,
  DATE_TO_STR,
  PHONE_STR,
  ZIP_CODE_STR,
};
