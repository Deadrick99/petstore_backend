import { z } from "zod";
import { zodTypes } from "../../utils/zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";

const cityInputCore = {
  Name: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Albuquerque" }),
  State: extendApi(zodTypes.STR_NON_EMPTY().length(2, "State must be the two letter abbreviation for the State name"), {
    example: "NM",
  }),
  Country: extendApi(
    zodTypes
      .STR_NON_EMPTY()
      .min(2, "Country must be the two or three letter abbreviation for the Country name")
      .max(3, "Country must be the two or three letter abbreviation for the Country name"),
    { example: "USA" }
  ),
  ZipCode: extendApi(zodTypes.ZIP_CODE_STR().nullable().optional(), { example: "87101" }),
  AreaCode: extendApi(
    zodTypes
      .STR_NON_EMPTY()
      .regex(/^\d{3}$/, "Must be a valid three digit Area Code")
      .nullable()
      .optional(),
    { example: "123" }
  ),
  Latitude: extendApi(zodTypes.NUM().nullable().optional(), { example: 35.0844 }),
  Longitude: extendApi(zodTypes.NUM().nullable().optional(), { example: 106.6504 }),
  Population1980: extendApi(zodTypes.INT().nullable().optional(), { example: 420000 }),
  Population1990: extendApi(zodTypes.INT().nullable().optional(), { example: 499000 }),
};

const cityOutputCore = {
  Name: extendApi(zodTypes.STR().nullable().optional(), { example: "Albuquerque" }),
  State: extendApi(zodTypes.STR().nullable().optional(), { example: "NM" }),
  Country: extendApi(zodTypes.STR().nullable().optional(), { example: "USA" }),
  ZipCode: extendApi(zodTypes.STR().nullable().optional(), { example: "87101" }),
  AreaCode: extendApi(zodTypes.STR().nullable().optional(), { example: "123" }),
  Latitude: extendApi(zodTypes.NUM().nullable().optional(), { example: 35.0844 }),
  Longitude: extendApi(zodTypes.NUM().nullable().optional(), { example: 106.6504 }),
  Population1980: extendApi(zodTypes.INT().nullable().optional(), { example: 420000 }),
  Population1990: extendApi(zodTypes.INT().nullable().optional(), { example: 499000 }),
};

const citySingleInputSchema = extendApi(
  z.object({ ...cityInputCore }, { required_error: "This endpoint requires a JSON object payload" })
);

const citySinglePartialInputSchema = citySingleInputSchema.partial();

const citySingleOutputSchema = z.object({
  Id: extendApi(zodTypes.INT(), { example: "1", description: "A number uniquely identifying the City" }),
  ...cityOutputCore,
});

const cityManyOutputSchema = z.array(citySingleOutputSchema);

const cityIdInputSchema = z.object({
  Id: extendApi(zodTypes.INT_STR(), {
    description: "A number (as a string) uniquely identifying the City",
  }).transform((str) => {
    return parseInt(str);
  }),
});

export type citySingleInputModel = z.infer<typeof citySingleInputSchema>;
export type citySinglePartialInputModel = z.infer<typeof citySinglePartialInputSchema>;
export type citySingleOutputModel = z.infer<typeof citySingleOutputSchema>;
export type cityManyOutputModel = z.infer<typeof cityManyOutputSchema>;
export type cityIdInputModel = z.infer<typeof cityIdInputSchema>;

export const citySchemas = {
  SingleInput: citySingleInputSchema,
  SinglePartialInput: citySinglePartialInputSchema,
  SingleOutput: citySingleOutputSchema,
  ManyOutput: cityManyOutputSchema,
  IdInput: cityIdInputSchema,
};

export const citySwaggerDefinitions = {
  SingleInput: generateSchema(citySingleInputSchema),
  SinglePartialInput: generateSchema(citySinglePartialInputSchema),
  SingleOutput: generateSchema(citySingleOutputSchema),
  ManyOutput: generateSchema(cityManyOutputSchema),
  IdInput: generateSchema(cityIdInputSchema),
};
