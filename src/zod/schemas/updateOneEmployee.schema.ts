import { z } from 'zod';
import { EmployeeUpdateInputObjectSchema } from './objects/EmployeeUpdateInput.schema';
import { EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema';

export const EmployeeUpdateOneSchema = z.object({
  data: EmployeeUpdateInputObjectSchema,
  where: EmployeeWhereUniqueInputObjectSchema,
});
