import { z } from 'zod';
import { EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema';
import { EmployeeOrderByWithAggregationInputObjectSchema } from './objects/EmployeeOrderByWithAggregationInput.schema';
import { EmployeeScalarWhereWithAggregatesInputObjectSchema } from './objects/EmployeeScalarWhereWithAggregatesInput.schema';
import { EmployeeScalarFieldEnumSchema } from './enums/EmployeeScalarFieldEnum.schema';

export const EmployeeGroupBySchema = z.object({
  where: EmployeeWhereInputObjectSchema.optional(),
  orderBy: EmployeeOrderByWithAggregationInputObjectSchema,
  having: EmployeeScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(EmployeeScalarFieldEnumSchema),
});
