import { z } from 'zod';
import { saleanimalWhereUniqueInputObjectSchema } from './objects/saleanimalWhereUniqueInput.schema';
import { saleanimalCreateInputObjectSchema } from './objects/saleanimalCreateInput.schema';
import { saleanimalUpdateInputObjectSchema } from './objects/saleanimalUpdateInput.schema';

export const saleanimalUpsertSchema = z.object({
  where: saleanimalWhereUniqueInputObjectSchema,
  create: saleanimalCreateInputObjectSchema,
  update: saleanimalUpdateInputObjectSchema,
});
