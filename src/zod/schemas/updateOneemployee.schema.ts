import { z } from 'zod';
import { employeeUpdateInputObjectSchema } from './objects/employeeUpdateInput.schema';
import { employeeWhereUniqueInputObjectSchema } from './objects/employeeWhereUniqueInput.schema';

export const employeeUpdateOneSchema = z.object({
  data: employeeUpdateInputObjectSchema,
  where: employeeWhereUniqueInputObjectSchema,
});
