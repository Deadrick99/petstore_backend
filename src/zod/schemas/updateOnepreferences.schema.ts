import { z } from 'zod';
import { preferencesUpdateInputObjectSchema } from './objects/preferencesUpdateInput.schema';
import { preferencesWhereUniqueInputObjectSchema } from './objects/preferencesWhereUniqueInput.schema';

export const preferencesUpdateOneSchema = z.object({
  data: preferencesUpdateInputObjectSchema,
  where: preferencesWhereUniqueInputObjectSchema,
});
