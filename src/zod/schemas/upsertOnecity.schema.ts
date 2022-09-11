import { z } from 'zod';
import { cityWhereUniqueInputObjectSchema } from './objects/cityWhereUniqueInput.schema';
import { cityCreateInputObjectSchema } from './objects/cityCreateInput.schema';
import { cityUpdateInputObjectSchema } from './objects/cityUpdateInput.schema';

export const cityUpsertSchema = z.object({
  where: cityWhereUniqueInputObjectSchema,
  create: cityCreateInputObjectSchema,
  update: cityUpdateInputObjectSchema,
});
