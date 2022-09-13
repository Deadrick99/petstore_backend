import { z } from 'zod';
import { EmployeeUpdateManyMutationInputObjectSchema } from './objects/EmployeeUpdateManyMutationInput.schema';
import { EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema';

export const EmployeeUpdateManySchema = z.object({
  data: EmployeeUpdateManyMutationInputObjectSchema,
  where: EmployeeWhereInputObjectSchema.optional(),
});
