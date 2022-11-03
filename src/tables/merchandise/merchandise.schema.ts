import { z } from "zod";
import { zodTypes } from "../../utils/zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";

const merchandiseInputCore = {
  Category: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), {
    example: "Dog",
    description: "Must be in the Categories endpoint",
  }),
  ListPrice: extendApi(zodTypes.NUM().nullable().optional(), { example: 12.34 }),
  QuantityOnHand: extendApi(zodTypes.INT().optional().nullable(), {
    example: 5,
  }),
  Description: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), {
    example: "A red collar with a silver colored name tag",
  }),
};

const merchandiseOutputCore = {
  Category: extendApi(zodTypes.STR().nullable().optional(), { example: "Dog" }),
  ListPrice: extendApi(zodTypes.DECIMAL_TO_NUM().nullable().optional(), { example: 12.34 }),
  QuantityOnHand: extendApi(zodTypes.INT().optional().nullable(), { example: 5 }),
  Description: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), {
    example: "A red collar with a silver colored name tag",
  }),
};

const merchandiseSingleInputSchema = extendApi(
  z.object({ ...merchandiseInputCore }, { required_error: "This endpoint requires a JSON object payload" })
);

const merchandiseSinglePartialInputSchema = merchandiseSingleInputSchema.partial();

const merchandiseSingleOutputSchema = z.object({
  Id: extendApi(zodTypes.INT(), { example: "1", description: "A number uniquely identifying the Merchandise" }),
  ...merchandiseOutputCore,
});

const merchandiseManyOutputSchema = z.array(merchandiseSingleOutputSchema);

const merchandiseIdInputSchema = z.object({
  Id: extendApi(zodTypes.INT(), {
    description: "A number uniquely identifying the Merchandise",
  }),
});

export type merchandiseSingleInputModel = z.infer<typeof merchandiseSingleInputSchema>;
export type merchandiseSinglePartialInputModel = z.infer<typeof merchandiseSinglePartialInputSchema>;
export type merchandiseSingleOutputModel = z.infer<typeof merchandiseSingleOutputSchema>;
export type merchandiseManyOutputModel = z.infer<typeof merchandiseManyOutputSchema>;
export type merchandiseIdInputModel = z.infer<typeof merchandiseIdInputSchema>;

export const merchandiseSchemas = {
  SingleInput: merchandiseSingleInputSchema,
  SinglePartialInput: merchandiseSinglePartialInputSchema,
  SingleOutput: merchandiseSingleOutputSchema,
  ManyOutput: merchandiseManyOutputSchema,
  IdInput: merchandiseIdInputSchema,
};

export const merchandiseSwaggerDefinitions = {
  SingleInput: generateSchema(merchandiseSingleInputSchema),
  SinglePartialInput: generateSchema(merchandiseSinglePartialInputSchema),
  SingleOutput: generateSchema(merchandiseSingleOutputSchema),
  ManyOutput: generateSchema(merchandiseManyOutputSchema),
  IdInput: generateSchema(merchandiseIdInputSchema),
};
