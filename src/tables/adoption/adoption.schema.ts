import { z } from "zod";
import { zodTypes } from "../../utils/zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";

const adoptionInputCore = {
  FirstName: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  LastName: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  EmailName: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  HomeSize: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  HoursDay: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  Why: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  CustomerEmail: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  Approve: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Spot" }),
  AnimalId: extendApi(zodTypes.INT(), { example: 420000 }),
};

const adoptionOutputCore = {
  FirstName: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  LastName: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  EmailName: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  HomeSize: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  HoursDay: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  Why: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  CustomerEmail: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  Approve: extendApi(zodTypes.STR().nullable().optional(), { example: "Spot" }),
  AnimalId: extendApi(zodTypes.INT().nullable().optional(), { example: 420000 }),
};

const adoptionSingleInputSchema = extendApi(
  z.object({ ...adoptionInputCore }, { required_error: "This endpoint requires a JSON object payload" })
);

const adoptionSinglePartialInputSchema = adoptionSingleInputSchema.partial();

const adoptionSingleOutputSchema = z.object({
  Id: extendApi(zodTypes.INT(), { example: "1", description: "A number uniquely identifying the Animal" }),
  ...adoptionOutputCore,
});

const adoptionManyOutputSchema = z.array(adoptionSingleOutputSchema);

const adoptionIdInputSchema = z.object({
  Id: extendApi(zodTypes.INT(), {
    description: "A number uniquely identifying the Animal",
  }),
});

export type adoptionSingleInputModel = z.infer<typeof adoptionSingleInputSchema>;
export type adoptionSinglePartialInputModel = z.infer<typeof adoptionSinglePartialInputSchema>;
export type adoptionSingleOutputModel = z.infer<typeof adoptionSingleOutputSchema>;
export type adoptionManyOutputModel = z.infer<typeof adoptionManyOutputSchema>;
export type adoptionIdInputModel = z.infer<typeof adoptionIdInputSchema>;

export const adoptionSchemas = {
  SingleInput: adoptionSingleInputSchema,
  SinglePartialInput: adoptionSinglePartialInputSchema,
  SingleOutput: adoptionSingleOutputSchema,
  ManyOutput: adoptionManyOutputSchema,
  IdInput: adoptionIdInputSchema,
};

export const adoptionSwaggerDefinitions = {
  SingleInput: generateSchema(adoptionSingleInputSchema),
  SinglePartialInput: generateSchema(adoptionSinglePartialInputSchema),
  SingleOutput: generateSchema(adoptionSingleOutputSchema),
  ManyOutput: generateSchema(adoptionManyOutputSchema),
  IdInput: generateSchema(adoptionIdInputSchema),
};
