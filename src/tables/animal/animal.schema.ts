import { z } from "zod";
import types from "../../utils/types";

export const animal_create_inputSchema = z.object(
  {
    Name: types.TEXT,
    Category: types.TEXT,
    Breed: types.TEXT.nullable().optional(),
    DateBorn: types.STR_TO_DATE.optional(),
    Gender: types.TEXT.refine((str) => str === "Male" || str === "Female", {
      message: "Gender must be 'Male' or 'Female'",
    }),
    Registered: types.TEXT.optional(),
    Color: types.TEXT.optional(),
    ListPrice: types.REAL.optional(),
    ImageFile: types.TEXT.optional(),
    ImageHeight: types.INT.optional(),
    ImageWidth: types.INT.optional(),
  },
  {
    required_error: "Animal JSON object is required",
  }
);

export type animal_create_inputModel = z.infer<typeof animal_create_inputSchema>;

export const animal_json_outputSchema = animal_create_inputSchema.partial().extend({
  Id: types.INT.optional(),
  DateBorn: types.DATE_TO_STR.optional(),
  ListPrice: types.DECIMAL_TO_NUMBER.optional(),
});
export type animal_jsonOutput_model = z.infer<typeof animal_json_outputSchema>;
