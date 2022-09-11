import { z } from 'zod';
import { merchandiseUpdateInputObjectSchema } from './objects/merchandiseUpdateInput.schema';
import { merchandiseWhereUniqueInputObjectSchema } from './objects/merchandiseWhereUniqueInput.schema';

export const merchandiseUpdateOneSchema = z.object({
  data: merchandiseUpdateInputObjectSchema,
  where: merchandiseWhereUniqueInputObjectSchema,
});
