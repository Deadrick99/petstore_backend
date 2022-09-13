import { z } from 'zod';
import { EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema';
import { EmployeeOrderByWithRelationInputObjectSchema } from './objects/EmployeeOrderByWithRelationInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema';

export const EmployeeAggregateSchema = z.object({
  where: EmployeeWhereInputObjectSchema.optional(),
  orderBy: EmployeeOrderByWithRelationInputObjectSchema.optional(),
  cursor: EmployeeWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
});
