import { z } from 'zod';
import { PreferencesWhereUniqueInputObjectSchema } from './objects/PreferencesWhereUniqueInput.schema';

export const PreferencesDeleteOneSchema = z.object({
  where: PreferencesWhereUniqueInputObjectSchema,
});
