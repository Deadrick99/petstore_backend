import { z } from "zod";
import { zodTypes } from "../../utils/zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";

const breedInputCore = {
  Category: extendApi(zodTypes.STR_NON_EMPTY(), {
    example: "Dog",
  }),
  Breed: extendApi(zodTypes.STR_NON_EMPTY(), {
    example: "Dalmatian",
  }),
};

const breedOutputCore = {
  Category: extendApi(zodTypes.STR().nullable().optional(), { example: "Dog" }),
  Breed: extendApi(zodTypes.STR().nullable().optional(), { example: "Dalmatian" }),
};

const breedSingleInputSchema = extendApi(
  z.object({ ...breedInputCore }, { required_error: "This endpoint requires a JSON object payload" })
);

const breedSinglePartialInputSchema = breedSingleInputSchema.partial();

const breedSingleOutputSchema = z.object({
  ...breedOutputCore,
});

const breedManyOutputSchema = z.array(breedSingleOutputSchema);

const breedIdInputSchema = z.object({
  ...breedInputCore,
});

export type breedSingleInputModel = z.infer<typeof breedSingleInputSchema>;
export type breedSinglePartialInputModel = z.infer<typeof breedSinglePartialInputSchema>;
export type breedSingleOutputModel = z.infer<typeof breedSingleOutputSchema>;
export type breedManyOutputModel = z.infer<typeof breedManyOutputSchema>;
export type breedIdInputModel = z.infer<typeof breedIdInputSchema>;

export const breedSchemas = {
  SingleInput: breedSingleInputSchema,
  SinglePartialInput: breedSinglePartialInputSchema,
  SingleOutput: breedSingleOutputSchema,
  ManyOutput: breedManyOutputSchema,
  IdInput: breedIdInputSchema,
};

export const breedSwaggerDefinitions = {
  SingleInput: generateSchema(breedSingleInputSchema),
  SinglePartialInput: generateSchema(breedSinglePartialInputSchema),
  SingleOutput: generateSchema(breedSingleOutputSchema),
  ManyOutput: generateSchema(breedManyOutputSchema),
  IdInput: generateSchema(breedIdInputSchema),
};
