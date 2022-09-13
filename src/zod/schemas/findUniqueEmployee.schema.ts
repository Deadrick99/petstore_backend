import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema';

export const EmployeeFindUniqueSchema = z.object({
  where: EmployeeWhereUniqueInputObjectSchema,
});
