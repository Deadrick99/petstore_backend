import { z } from 'zod';
import { PreferencesWhereUniqueInputObjectSchema } from './objects/PreferencesWhereUniqueInput.schema';
import { PreferencesCreateInputObjectSchema } from './objects/PreferencesCreateInput.schema';
import { PreferencesUpdateInputObjectSchema } from './objects/PreferencesUpdateInput.schema';

export const PreferencesUpsertSchema = z.object({
  where: PreferencesWhereUniqueInputObjectSchema,
  create: PreferencesCreateInputObjectSchema,
  update: PreferencesUpdateInputObjectSchema,
});
