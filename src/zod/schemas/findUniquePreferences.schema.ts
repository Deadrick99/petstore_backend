import { z } from 'zod';
import { PreferencesWhereUniqueInputObjectSchema } from './objects/PreferencesWhereUniqueInput.schema';

export const PreferencesFindUniqueSchema = z.object({
  where: PreferencesWhereUniqueInputObjectSchema,
});
