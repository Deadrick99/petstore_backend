import { z } from "zod";
import { zodTypes } from "../../utils/zod";
import { extendApi, generateSchema } from "@anatine/zod-openapi";

const customerInputCore = {
  FirstName: extendApi(zodTypes.STR_NON_EMPTY(), { example: "John" }),
  LastName: extendApi(zodTypes.STR_NON_EMPTY(), { example: "Doe" }),
  Phone: extendApi(zodTypes.PHONE_STR().nullable().optional(), {
    example: "(123) 456-7890",
    examples: ["123 4567", "(123) 456 7890"],
    description: "US phone numbers only",
  }),
  Address: extendApi(zodTypes.STR_NON_EMPTY().nullable().optional(), { example: "123 Main St." }),
  ZipCode: zodTypes.ZIP_CODE_STR().nullable().optional(),
  CityId: extendApi(zodTypes.INT().nullable().optional(), { description: "Must be in the Cities endpoint" }),
};

const customerOutputCore = {
  FirstName: extendApi(zodTypes.STR().nullable().optional(), { example: "John" }),
  LastName: extendApi(zodTypes.STR().nullable().optional(), { example: "Doe" }),
  Phone: extendApi(zodTypes.STR().nullable().optional(), { example: "123 4567" }),
  Address: extendApi(zodTypes.STR().nullable().optional(), { example: "123 Main St." }),
  ZipCode: extendApi(zodTypes.STR().nullable().optional(), { example: "12345" }),
  CityId: zodTypes.INT().nullable().optional(),
};

const customerSingleInputSchema = extendApi(
  z.object({ ...customerInputCore }, { required_error: "This endpoint requires a JSON object payload" })
);

const customerSinglePartialInputSchema = customerSingleInputSchema.partial();

const customerSingleOutputSchema = z.object({
  Id: extendApi(zodTypes.INT(), { example: "1", description: "A number uniquely identifying the Customer" }),
  ...customerOutputCore,
});

const customerManyOutputSchema = z.array(customerSingleOutputSchema);

const customerIdInputSchema = z.object({
  Id: extendApi(zodTypes.INT(), {
    description: "A number uniquely identifying the Customer",
  }),
});

export type customerSingleInputModel = z.infer<typeof customerSingleInputSchema>;
export type customerSinglePartialInputModel = z.infer<typeof customerSinglePartialInputSchema>;
export type customerSingleOutputModel = z.infer<typeof customerSingleOutputSchema>;
export type customerManyOutputModel = z.infer<typeof customerManyOutputSchema>;
export type customerIdInputModel = z.infer<typeof customerIdInputSchema>;

export const customerSchemas = {
  SingleInput: customerSingleInputSchema,
  SinglePartialInput: customerSinglePartialInputSchema,
  SingleOutput: customerSingleOutputSchema,
  ManyOutput: customerManyOutputSchema,
  IdInput: customerIdInputSchema,
};

export const customerSwaggerDefinitions = {
  SingleInput: generateSchema(customerSingleInputSchema),
  SinglePartialInput: generateSchema(customerSinglePartialInputSchema),
  SingleOutput: generateSchema(customerSingleOutputSchema),
  ManyOutput: generateSchema(customerManyOutputSchema),
  IdInput: generateSchema(customerIdInputSchema),
};
