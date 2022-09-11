import { z } from 'zod';
import { employeeUpdateManyMutationInputObjectSchema } from './objects/employeeUpdateManyMutationInput.schema';
import { employeeWhereInputObjectSchema } from './objects/employeeWhereInput.schema';

export const employeeUpdateManySchema = z.object({
  data: employeeUpdateManyMutationInputObjectSchema,
  where: employeeWhereInputObjectSchema.optional(),
});
