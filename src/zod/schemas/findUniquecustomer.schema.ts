import { z } from 'zod';
import { customerWhereUniqueInputObjectSchema } from './objects/customerWhereUniqueInput.schema';

export const customerFindUniqueSchema = z.object({
  where: customerWhereUniqueInputObjectSchema,
});
