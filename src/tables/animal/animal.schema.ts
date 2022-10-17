import { z } from "zod";
import { zodTypes } from "../../utils/zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";

const animalInputCore = {
  Name: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  Category: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), {
    example: "Dog",
    description: "Must be in the Categories endpoint",
  }),
  Breed: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), {
    example: "Dalmatian",
    description: "Must be in the Breeds endpoint",
  }),
  DateBorn: extendApi(zodTypes.DATE_STR(), { example: "31-12-2022", description: "Format: 'DD-MM-YYYY HH:MM:SS'" }),
  Gender: extendApi(
    zodTypes.STR_NON_EMPTY().refine((str) => {
      return str === "Male" || str === "Female";
    }, "This must be either 'Male' or 'Female'"),
    { example: "Male", enum: ["Male", "Female"] }
  ),
  Registered: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), { example: "CFA" }),
  Color: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), { example: "White, with Black spots" }),
  ListPrice: extendApi(zodTypes.NUM().nullable().optional(), { example: 12.34 }),
};

const animalOutputCore = {
  Name: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  Category: extendApi(zodTypes.STR().nullable().optional(), { example: "Dog" }),
  Breed: extendApi(zodTypes.STR().nullable().optional(), { example: "Dalmatian" }),
  DateBorn: extendApi(zodTypes.DATE_TO_STR().nullable().optional(), { example: "31-12-2022" }),
  Gender: extendApi(zodTypes.STR().nullable().optional(), { example: "Male" }),
  Registered: extendApi(zodTypes.STR().nullable().optional(), { example: "CFA" }),
  Color: extendApi(zodTypes.STR().nullable().optional(), { example: "White, with Black spots" }),
  ListPrice: extendApi(zodTypes.DECIMAL_TO_NUM().nullable().optional(), { example: 12.34 }),
};

const animalSingleInputSchema = extendApi(
  z.object({ ...animalInputCore }, { required_error: "This endpoint requires a JSON object payload" })
);

const animalSinglePartialInputSchema = animalSingleInputSchema.partial();

const animalSingleOutputSchema = z.object({
  Id: extendApi(zodTypes.INT(), { example: "1", description: "A number uniquely identifying the Animal" }),
  ...animalOutputCore,
});

const animalManyOutputSchema = z.array(animalSingleOutputSchema);

const animalIdInputSchema = z.object({
  Id: extendApi(zodTypes.INT(), {
    description: "A number uniquely identifying the Animal",
  }),
});

export type animalSingleInputModel = z.infer<typeof animalSingleInputSchema>;
export type animalSinglePartialInputModel = z.infer<typeof animalSinglePartialInputSchema>;
export type animalSingleOutputModel = z.infer<typeof animalSingleOutputSchema>;
export type animalManyOutputModel = z.infer<typeof animalManyOutputSchema>;
export type animalIdInputModel = z.infer<typeof animalIdInputSchema>;

export const animalSchemas = {
  SingleInput: animalSingleInputSchema,
  SinglePartialInput: animalSinglePartialInputSchema,
  SingleOutput: animalSingleOutputSchema,
  ManyOutput: animalManyOutputSchema,
  IdInput: animalIdInputSchema,
};

export const animalSwaggerDefinitions = {
  SingleInput: generateSchema(animalSingleInputSchema),
  SinglePartialInput: generateSchema(animalSinglePartialInputSchema),
  SingleOutput: generateSchema(animalSingleOutputSchema),
  ManyOutput: generateSchema(animalManyOutputSchema),
  IdInput: generateSchema(animalIdInputSchema),
};
