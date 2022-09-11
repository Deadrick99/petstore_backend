import { z } from 'zod';
import { employeeWhereInputObjectSchema } from './objects/employeeWhereInput.schema';

export const employeeDeleteManySchema = z.object({
  where: employeeWhereInputObjectSchema.optional(),
});
