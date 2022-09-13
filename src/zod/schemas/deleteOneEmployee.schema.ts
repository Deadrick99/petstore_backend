import { z } from 'zod';
import { EmployeeWhereUniqueInputObjectSchema } from './objects/EmployeeWhereUniqueInput.schema';

export const EmployeeDeleteOneSchema = z.object({
  where: EmployeeWhereUniqueInputObjectSchema,
});
