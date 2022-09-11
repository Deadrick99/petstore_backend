import { z } from 'zod';
import { preferencesWhereInputObjectSchema } from './objects/preferencesWhereInput.schema';

export const preferencesDeleteManySchema = z.object({
  where: preferencesWhereInputObjectSchema.optional(),
});
