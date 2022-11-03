import { z } from "zod";
import { zodTypes } from "../../utils/zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";

const categoryInputCore = {
  Category: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Dog" }),
  Registration: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), { example: "CFA" }),
};

const categoryOutputCore = {
  Category: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), { example: "Dog" }),
  Registration: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), { example: "CFA" }),
};

const categorySingleInputSchema = extendApi(
  z.object({ ...categoryInputCore }, { required_error: "This endpoint requires a JSON object payload" })
);

const categorySinglePartialInputSchema = categorySingleInputSchema.partial();

const categorySingleOutputSchema = z.object({
  ...categoryOutputCore,
});

const categoryManyOutputSchema = z.array(categorySingleOutputSchema);

const categoryIdInputSchema = z.object({
  Category: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Dog" }),
});

export type categorySingleInputModel = z.infer<typeof categorySingleInputSchema>;
export type categorySinglePartialInputModel = z.infer<typeof categorySinglePartialInputSchema>;
export type categorySingleOutputModel = z.infer<typeof categorySingleOutputSchema>;
export type categoryManyOutputModel = z.infer<typeof categoryManyOutputSchema>;
export type categoryIdInputModel = z.infer<typeof categoryIdInputSchema>;

export const categorySchemas = {
  SingleInput: categorySingleInputSchema,
  SinglePartialInput: categorySinglePartialInputSchema,
  SingleOutput: categorySingleOutputSchema,
  ManyOutput: categoryManyOutputSchema,
  IdInput: categoryIdInputSchema,
};

export const categorySwaggerDefinitions = {
  SingleInput: generateSchema(categorySingleInputSchema),
  SinglePartialInput: generateSchema(categorySinglePartialInputSchema),
  SingleOutput: generateSchema(categorySingleOutputSchema),
  ManyOutput: generateSchema(categoryManyOutputSchema),
  IdInput: generateSchema(categoryIdInputSchema),
};
