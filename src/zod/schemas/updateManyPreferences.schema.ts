import { z } from 'zod';
import { PreferencesUpdateManyMutationInputObjectSchema } from './objects/PreferencesUpdateManyMutationInput.schema';
import { PreferencesWhereInputObjectSchema } from './objects/PreferencesWhereInput.schema';

export const PreferencesUpdateManySchema = z.object({
  data: PreferencesUpdateManyMutationInputObjectSchema,
  where: PreferencesWhereInputObjectSchema.optional(),
});
