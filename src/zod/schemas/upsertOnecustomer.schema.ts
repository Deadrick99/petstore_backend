import { z } from 'zod';
import { customerWhereUniqueInputObjectSchema } from './objects/customerWhereUniqueInput.schema';
import { customerCreateInputObjectSchema } from './objects/customerCreateInput.schema';
import { customerUpdateInputObjectSchema } from './objects/customerUpdateInput.schema';

export const customerUpsertSchema = z.object({
  where: customerWhereUniqueInputObjectSchema,
  create: customerCreateInputObjectSchema,
  update: customerUpdateInputObjectSchema,
});
