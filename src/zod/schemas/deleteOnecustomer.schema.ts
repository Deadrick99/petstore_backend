import { z } from 'zod';
import { customerWhereUniqueInputObjectSchema } from './objects/customerWhereUniqueInput.schema';

export const customerDeleteOneSchema = z.object({
  where: customerWhereUniqueInputObjectSchema,
});
