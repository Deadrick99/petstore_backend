import { z } from "zod";
import { zodTypes } from "../../utils/zod";

const cityInputCore = {
  Name: zodTypes.STR_NON_EMPTY,
  State: zodTypes.STR_NON_EMPTY.length(2, "This field must be a two-letter abbreviation for a state"),
  Country: zodTypes.STR_NON_EMPTY.min(2, "This field must be a 2 or 3 letter abbreviation for the country").max(
    3,
    "This field must be a 2 or 3 letter abbreviation for the country"
  ),
  ZipCode: zodTypes.ZIP_CODE_STR,
  AreaCode: zodTypes.NUM_STR.nullable().optional(),
  Latitude: zodTypes.NUM.nullable().optional(),
  Longitude: zodTypes.NUM.nullable().optional(),
  Population1980: zodTypes.INT.nullable().optional(),
  Population1990: zodTypes.INT.nullable().optional(),
};

const cityOutputCore = {
  Name: zodTypes.STR.nullable().optional(),
  State: zodTypes.STR.nullable().optional(),
  Country: zodTypes.STR.nullable().optional(),
  ZipCode: zodTypes.STR.nullable().optional(),
  AreaCode: zodTypes.STR.nullable().optional(),
  Latitude: zodTypes.NUM.nullable().optional(),
  Longitude: zodTypes.NUM.nullable().optional(),
  Population1980: zodTypes.INT.nullable().optional(),
  Population1990: zodTypes.INT.nullable().optional(),
};

export const citySingleInputSchema = z.object(
  { ...cityInputCore },
  { required_error: "This endpoint requires a JSON object payload" }
);
export type citySingleInputModel = z.infer<typeof citySingleInputSchema>;

export const citySinglePartialInputSchema = citySingleInputSchema.partial();
export type citySinglePartialInputModel = z.infer<typeof citySinglePartialInputSchema>;

export const citySingleOutputSchema = z.object({ Id: zodTypes.INT, ...cityOutputCore });
export type citySingleOutputModel = z.infer<typeof citySingleOutputSchema>;

export const cityManyOutputSchema = z.array(citySingleOutputSchema);
export type cityManyOutputModel = z.infer<typeof cityManyOutputSchema>;

export const cityIdInputSchema = z.object({
  Id: zodTypes.INT_STR.transform((str) => {
    return parseInt(str);
  }),
});
export type cityIdInputModel = z.infer<typeof cityIdInputSchema>;
