import { z } from 'zod';
import { employeeCreateInputObjectSchema } from './objects/employeeCreateInput.schema';

export const employeeCreateOneSchema = z.object({
  data: employeeCreateInputObjectSchema,
});
