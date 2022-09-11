import { z } from 'zod';
import { preferencesWhereUniqueInputObjectSchema } from './objects/preferencesWhereUniqueInput.schema';
import { preferencesCreateInputObjectSchema } from './objects/preferencesCreateInput.schema';
import { preferencesUpdateInputObjectSchema } from './objects/preferencesUpdateInput.schema';

export const preferencesUpsertSchema = z.object({
  where: preferencesWhereUniqueInputObjectSchema,
  create: preferencesCreateInputObjectSchema,
  update: preferencesUpdateInputObjectSchema,
});
