import { z } from 'zod';
import { merchandiseorderWhereUniqueInputObjectSchema } from './objects/merchandiseorderWhereUniqueInput.schema';

export const merchandiseorderFindUniqueSchema = z.object({
  where: merchandiseorderWhereUniqueInputObjectSchema,
});
