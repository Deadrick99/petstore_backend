import { z } from 'zod';
import { customerWhereInputObjectSchema } from './objects/customerWhereInput.schema';

export const customerDeleteManySchema = z.object({
  where: customerWhereInputObjectSchema.optional(),
});
