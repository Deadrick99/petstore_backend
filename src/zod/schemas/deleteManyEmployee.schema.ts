import { z } from 'zod';
import { EmployeeWhereInputObjectSchema } from './objects/EmployeeWhereInput.schema';

export const EmployeeDeleteManySchema = z.object({
  where: EmployeeWhereInputObjectSchema.optional(),
});
