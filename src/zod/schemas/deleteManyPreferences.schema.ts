import { z } from 'zod';
import { PreferencesWhereInputObjectSchema } from './objects/PreferencesWhereInput.schema';

export const PreferencesDeleteManySchema = z.object({
  where: PreferencesWhereInputObjectSchema.optional(),
});
