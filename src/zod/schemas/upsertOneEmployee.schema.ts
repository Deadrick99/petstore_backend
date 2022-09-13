import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema';
import { EmployeeCreateInputObjectSchema } from './objects/EmployeeCreateInput.schema';
import { EmployeeUpdateInputObjectSchema } from './objects/EmployeeUpdateInput.schema';

export const EmployeeUpsertSchema = z.object({
  where: EmployeeWhereUniqueInputObjectSchema,
  create: EmployeeCreateInputObjectSchema,
  update: EmployeeUpdateInputObjectSchema,
});
