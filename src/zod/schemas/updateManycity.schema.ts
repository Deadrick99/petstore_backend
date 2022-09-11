import { z } from 'zod';
import { cityUpdateManyMutationInputObjectSchema } from './objects/cityUpdateManyMutationInput.schema';
import { cityWhereInputObjectSchema } from './objects/cityWhereInput.schema';

export const cityUpdateManySchema = z.object({
  data: cityUpdateManyMutationInputObjectSchema,
  where: cityWhereInputObjectSchema.optional(),
});
