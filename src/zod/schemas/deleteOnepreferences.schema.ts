import { z } from 'zod';
import { preferencesWhereUniqueInputObjectSchema } from './objects/preferencesWhereUniqueInput.schema';

export const preferencesDeleteOneSchema = z.object({
  where: preferencesWhereUniqueInputObjectSchema,
});
