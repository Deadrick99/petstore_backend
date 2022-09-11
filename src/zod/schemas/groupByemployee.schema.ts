import { z } from 'zod';
import { employeeWhereInputObjectSchema } from './objects/employeeWhereInput.schema';
import { employeeOrderByWithAggregationInputObjectSchema } from './objects/employeeOrderByWithAggregationInput.schema';
import { employeeScalarWhereWithAggregatesInputObjectSchema } from './objects/employeeScalarWhereWithAggregatesInput.schema';
import { employeeScalarFieldEnumSchema } from './enums/employeeScalarFieldEnum.schema';

export const employeeGroupBySchema = z.object({
  where: employeeWhereInputObjectSchema.optional(),
  orderBy: employeeOrderByWithAggregationInputObjectSchema,
  having: employeeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(employeeScalarFieldEnumSchema),
});
