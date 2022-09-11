import { z } from 'zod';
import { preferencesWhereUniqueInputObjectSchema } from './objects/preferencesWhereUniqueInput.schema';

export const preferencesFindUniqueSchema = z.object({
  where: preferencesWhereUniqueInputObjectSchema,
});
