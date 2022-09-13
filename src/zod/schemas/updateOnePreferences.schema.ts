import { z } from 'zod';
import { PreferencesUpdateInputObjectSchema } from './objects/PreferencesUpdateInput.schema';
import { PreferencesWhereUniqueInputObjectSchema } from './objects/PreferencesWhereUniqueInput.schema';

export const PreferencesUpdateOneSchema = z.object({
  data: PreferencesUpdateInputObjectSchema,
  where: PreferencesWhereUniqueInputObjectSchema,
});
