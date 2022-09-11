import { z } from 'zod';
import { employeeWhereInputObjectSchema } from './objects/employeeWhereInput.schema';
import { employeeOrderByWithRelationInputObjectSchema } from './objects/employeeOrderByWithRelationInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './objects/employeeWhereUniqueInput.schema';

export const employeeAggregateSchema = z.object({
  where: employeeWhereInputObjectSchema.optional(),
  orderBy: employeeOrderByWithRelationInputObjectSchema.optional(),
  cursor: employeeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
