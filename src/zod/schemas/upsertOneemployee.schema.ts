import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './objects/employeeWhereUniqueInput.schema';
import { employeeCreateInputObjectSchema } from './objects/employeeCreateInput.schema';
import { employeeUpdateInputObjectSchema } from './objects/employeeUpdateInput.schema';

export const employeeUpsertSchema = z.object({
  where: employeeWhereUniqueInputObjectSchema,
  create: employeeCreateInputObjectSchema,
  update: employeeUpdateInputObjectSchema,
});
