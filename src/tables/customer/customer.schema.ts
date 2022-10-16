import { z } from "zod";
import { zodTypes } from "../../utils/zod";
import { buildJsonSchemas } from "fastify-zod";

const customerInputCore = {
  FirstName: zodTypes.STR_NON_EMPTY,
  LastName: zodTypes.STR_NON_EMPTY,
  Phone: zodTypes.PHONE_STR.nullable().optional(),
  Address: zodTypes.STR.nullable().optional(),
  ZipCode: zodTypes.ZIP_CODE_STR.nullable().optional(),
  CityId: zodTypes.INT.nullable().optional(),
};

const customerOutputCore = {
  FirstName: zodTypes.STR.nullable().optional(),
  LastName: zodTypes.STR.nullable().optional(),
  Phone: zodTypes.STR.nullable().optional(),
  Address: zodTypes.STR.nullable().optional(),
  ZipCode: zodTypes.STR.nullable().optional(),
  CityId: zodTypes.INT.nullable().optional(),
};

export const customerSingleInputSchema = z.object(
  { ...customerInputCore },
  { required_error: "This endpoint requires a JSON object payload" }
);
export type customerSingleInputModel = z.infer<typeof customerSingleInputSchema>;

export const customerSinglePartialInputSchema = customerSingleInputSchema.partial();
export type customerSinglePartialInputModel = z.infer<typeof customerSinglePartialInputSchema>;

export const customerSingleOutputSchema = z.object({ Id: zodTypes.INT, ...customerOutputCore });
export type customerSingleOutputModel = z.infer<typeof customerSingleOutputSchema>;

export const customerManyOutputSchema = z.array(customerSingleOutputSchema);
export type customerManyOutputModel = z.infer<typeof customerManyOutputSchema>;

export const customerIdInputSchema = z.object({
  Id: zodTypes.INT_STR.transform((str) => {
    return parseInt(str);
  }),
});
export type customerIdInputModel = z.infer<typeof customerIdInputSchema>;

export const { schemas: customerSchemas, $ref } = buildJsonSchemas({
  customerSingleInputSchema,
  customerSinglePartialInputSchema,
  customerSingleOutputSchema,
  customerManyOutputSchema,
  customerIdInputSchema,
});
