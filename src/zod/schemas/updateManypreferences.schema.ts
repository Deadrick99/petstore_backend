import { z } from 'zod';
import { preferencesUpdateManyMutationInputObjectSchema } from './objects/preferencesUpdateManyMutationInput.schema';
import { preferencesWhereInputObjectSchema } from './objects/preferencesWhereInput.schema';

export const preferencesUpdateManySchema = z.object({
  data: preferencesUpdateManyMutationInputObjectSchema,
  where: preferencesWhereInputObjectSchema.optional(),
});
