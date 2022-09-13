import { z } from 'zod';
import { EmployeeCreateInputObjectSchema } from './objects/EmployeeCreateInput.schema';

export const EmployeeCreateOneSchema = z.object({
  data: EmployeeCreateInputObjectSchema,
});
