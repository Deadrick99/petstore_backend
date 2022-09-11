import { z } from 'zod';
import { merchandiseWhereUniqueInputObjectSchema } from './objects/merchandiseWhereUniqueInput.schema';

export const merchandiseFindUniqueSchema = z.object({
  where: merchandiseWhereUniqueInputObjectSchema,
});
