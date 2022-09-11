import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './objects/employeeWhereUniqueInput.schema';

export const employeeFindUniqueSchema = z.object({
  where: employeeWhereUniqueInputObjectSchema,
});
