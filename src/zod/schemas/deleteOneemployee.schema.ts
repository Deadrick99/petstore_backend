import { z } from 'zod';
import { employeeWhereUniqueInputObjectSchema } from './objects/employeeWhereUniqueInput.schema';

export const employeeDeleteOneSchema = z.object({
  where: employeeWhereUniqueInputObjectSchema,
});
